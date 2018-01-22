import bcrypt from 'bcrypt';

export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'username already exists'
      },
      validate:{
        notEmpty: {
          msg: 'field must not be empty'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: {
          msg: 'field must not be empty'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'email already exists'
      },
      validate:{
        notEmpty: {
          msg: 'field must not be empty'
        },
        isEmail: {
          args: true,
          msg: 'Please enter a valid email'
        }
      }
    },
  },
    {
      hooks: {
        beforeCreate(user) {
          const salt = bcrypt.genSaltSync();
          user.password = bcrypt.hashSync(user.password, salt);
        },
        beforeUpdate(user) {
          if(user.password) {
            const salt = bcrypt.genSaltSync();
            user.password = bcrypt.hashSync(user.password, salt);
            user.updateAt = Date.now();
          }
        }
      }
    },
  ); //end fo define method

  User.associate = (models) => {
    User.belongsToMany(models.Group, {
      through: 'groupUsers',
      as: 'groupsForThisUser',
      foreignKey: 'userId',
    }); //end of belongsToMany association definition    
  }; //end of arrow function definition
  
  User.prototype.verifyPassword = (userPassword, basepassword)=> {
    return bcrypt.compareSync(userPassword, basepassword);
  }; //end of model method veifyuser

  User.prototype.filterUserDetails = ()=> {
    const details = this.get();
    delete details.password;
    delete details.updateAt;
    return details;
  }; //end of model method filterUserDetails

  return User;

};