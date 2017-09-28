
export default (sequelize, DataTypes) => {
  const groupUsers = sequelize.define('groupUsers', {
    userId: DataTypes.INTEGER,
    groupId: DataTypes.INTEGER
  });

  return groupUsers;
};
