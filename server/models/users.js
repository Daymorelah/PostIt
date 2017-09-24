

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
      through: 'groupUsers',
      as: 'usersOfGroup',
      foreignKey: 'userID'
    });
  }; // end of field associate

  return users;
};
