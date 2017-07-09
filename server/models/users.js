
export default (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    username: DataTypes.STRING,
    password:DataTypes.STRING,
    email:DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {
       users.belongsTo(model.group, {
         foreignKey: "groupID"
       });//end of function belongsTo
      }//end of field associate
    }//end of classMethods
  });
  return users;
};