
export default (sequelize, DataTypes) => {
  const message = sequelize.define('message', {
    messageBody: DataTypes.STRING,
    messageAuthor:DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {
        message.hasOne(model.group,{
          foreignKey: "messageID",
          onDelete: "CASCADE"
        });//end of hasone relationship
      }//end of associates field
    }//end of classMethods
  });
  return message;
};