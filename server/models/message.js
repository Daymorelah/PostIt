
export default (sequelize, DataTypes) => {
  const message = sequelize.define('message', {
    messageBody: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    messageAuthor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    priority: {
      type: DataTypes.STRING
    },
    groupId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    classMethods: {
      associate: (models) => {
        message.belongsTo(models.groups, {
          foreignKey: 'groupId'
        });
      } // end of associates field
    } // end of classMethods
  }); // end of const message
  return message;
}; // end of export default.
