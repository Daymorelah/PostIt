

export default (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    username: {type:DataTypes.STRING,
    allowNull:false
  },
    password:{type:DataTypes.STRING,
    allowNull:false
  },
    email:{type:DataTypes.STRING,
    allowNull:false
  },
  }, {
    classMethods: {
      associate: (models) => {
        users.belongsToMany(group, {through: 'groupUsers'});
      }//end of field associate
    }//end of classMethods
  });
  return users;
};