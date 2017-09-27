
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
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });

  messages.associate = (models) => {
    messages.belongsTo(models.groups, {
      foreignKey: 'groupId',  //puts groupId column in the message table 
      as:'group'              //get the group a message belonts to as 'group'
    }); //end of belongsTo association
  };    // end of arrow function defintion
  return messages;
}; // end of export default.
