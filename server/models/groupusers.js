
export default (sequelize, DataTypes) =>{
  const groupUsers = sequelize.define('groupUsers', {

    groupId: {
      type:DataTypes.INTEGER,
    },

    userId: {
      type: DataTypes.INTEGER,
    },

  });
  
  return groupUsers;
};