
export default (sequelize, DataTypes) => {
  const groupUsers = sequelize.define('groupUsers', {
    userID: DataTypes.INTEGER,
    groupID: DataTypes.INTEGER
  });

  return groupUsers;
};