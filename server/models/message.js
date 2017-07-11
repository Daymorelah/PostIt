
export default (sequelize, DataTypes) => {
  const message = sequelize.define('message', {
    messageBody: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    messageAuthor:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    priority: {
      type: DataTypes.ENUM,
      values: ['normal', 'user', 'urgent']
    },
  }, {
    classMethods: {
      associate: (models) => {
        message.belongsTo(models.group, {
          name: 'group_ID'
        });
      } // end of associates field
    } // end of classMethods
  }); // end of const message
  return message;
}; // end of export default.
