'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, DataTypes) {
  var Group = sequelize.define('Group', {

    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true
    },
    groupName: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    discription: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Group.associate = function (models) {

    Group.hasMany(models.Message, {
      foreignKey: 'groupId',
      sourceKey: 'id',
      as: 'messagesForThisGroup'
    }); //end of hasMany association definition

    Group.belongsToMany(models.User, {
      through: 'groupUsers',
      foreignKey: 'groupId',
      as: 'usersOfThisGroup'
    }); //end of hasMany association definition
  }; // end of arrow function definition

  return Group;
};