
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
    })
    ;
  };

  groups.associate = (models) => {
    groups.belongsToMany(models.users, {
      through: 'groupUsers',
      as: 'groupMembers',
      foreignKey: 'groupID'
    });
    // associations can be defined here
  };// end of associate key

  return groups;
};
