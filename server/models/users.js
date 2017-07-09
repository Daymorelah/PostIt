
export default (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    username: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
      }//end of field associate
    }//end of classMethods
  });
  return users;
};