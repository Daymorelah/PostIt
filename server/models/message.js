
export default (sequelize, DataTypes) => {
  const messages = sequelize.define('messages', {
    messageBody: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    messageAuthor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    groupId:{
      type: DataTypes.INTEGER,
    }
  });

  messages.associate = (models) => {
    messages.belongsTo(models.groups, {
      // foreignKey: 'groupId',  //puts groupId column in the message table 
      // as:'group'              //get the group a message belonts to as 'group'
    }); //end of belongsTo association
  };    // end of arrow function defintion
  return messages;
}; // end of export default.
