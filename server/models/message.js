
export default (sequelize, DataTypes) => {
  const message = sequelize.define('message', {
    messageBody: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
      }//end of associates field
    }//end of classMethods
  });
  return message;
};