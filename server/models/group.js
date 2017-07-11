
export default (sequelize, DataTypes) => {
  const group = sequelize.define('group', {
    groupName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    groupOwner: {
      type: DataTypes.STRING,
      allowNull: false }
  }, {
    classMethods: {
      associate: (models) => {
        group.hasMany(models.messages, {
          name: 'group_ID'
        });
        group.belongsToMany(models.users, { through: 'groupUsers' });
        // associations can be defined here
      }// end of associate key
    } // end of classMethods
  });
  return group;
};
