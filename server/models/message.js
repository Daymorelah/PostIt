
export default (sequelize, DataTypes) => {
  const messages = sequelize.define('messages', {
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
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  messages.associate = (models) => {
    messages.belongsTo(models.groups, {
      foreignKey: 'groupId',
      as: 'groupMesssage'
    });
  }; // end of associates field
  return messages;
}; // end of export default.
