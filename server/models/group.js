
export default (sequelize, DataTypes) => {
  const groups = sequelize.define('groups', {
    groupName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    discription: {
      type: DataTypes.STRING,
      allowNull: false },
  });

  groups.associate = (models) => {
    groups.hasMany(models.messages, {
      foreignKey: 'groupId',
      as: 'messagesForThisGroup'    //list messages for this group via messagesForThisGroup
    }); //end of hasMany association declaration
  }; //end of arrow function definition

  groups.associate = (models) => {
    groups.belongsToMany(models.users, {
      through: 'groupUsers',    //groups and users table are connected via 'groupUsers' table
      as: 'groupMembers',       //list users in a group via groupEmebers
      foreignKey: 'groupId'     //create a groupId column in the groupUsers table that refs
    }); //end of belongsToMany association definition
  };    // end of arrow function definition

  return groups;
};
