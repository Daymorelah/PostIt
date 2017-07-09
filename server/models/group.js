
export default (sequelize, DataTypes) => {
  const group = sequelize.define('group', {
    groupName: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
      }// end of associate key
    } //end of classMethods
  });
  return group;
};