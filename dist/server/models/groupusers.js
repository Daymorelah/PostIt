'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, DataTypes) {
  var groupUsers = sequelize.define('groupUsers', {

    groupId: {
      type: DataTypes.INTEGER
    },

    userId: {
      type: DataTypes.INTEGER
    }

  });

  return groupUsers;
};