

export default (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });

  users.associate = (models) => {
    users.belongsToMany(models.groups, {
      through: 'groupUsers',    //the table that links group table and user table  
      as: 'groupsForThisUser',  //list groups a user belongs to via groupsForThisUser
      foreignKey: 'userId'      //creates a userId column in groupUsers table that holds groupID
    });
  }; // end of field associate

  return users;
};
