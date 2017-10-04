
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
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  }); //end fo define method

  User.associate = (models) => {
    User.belongsToMany(models.Group, {
      through: 'groupUsers',
      as: 'groupsForThisUser',
      foreignKey: 'userId',
    }); //end of belongsToMany association definition    
  }; //end of arrow function definition
  return User;
};