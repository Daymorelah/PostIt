'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var groupModel = _models2.default.Group;
var userModel = _models2.default.User;
var groupUsersModel = _models2.default.groupUsers;
var messageModel = _models2.default.Message;

exports.default = {
  //Create a group in the app
  createGroup: function createGroup(req, res) {
    return groupModel.create({
      groupName: req.body.groupName,
      discription: req.body.discription
    }).then(function (data) {
      res.status(201).send({
        message: 'Group ' + data.groupName + ' created sucesfully'
      }); //end of send method
    }).catch(function (error) {
      return res.status(400).send(error.message);
    });
  },


  //add a user to  a group
  addUser: function addUser(req, res) {
    var groupid = req.params.groupid;
    var userIdToAdd = req.body.id;

    return groupModel.findById(groupid).then(function (data) {
      if (!data) {
        return res.status(201).send({ message: 'Group does not exists' });
      } else {
        return groupUsersModel.create({
          userId: userIdToAdd,
          groupId: req.params.groupid
        }).then(function () {
          res.status(201).send({
            message: 'User successfully added to the group'
          });
        }).catch(function (error) {
          return res.status(400).send(error.message);
        });
      } //end of else statement
    }).catch(function (error) {
      return res.status(400).send(error.message);
    });
  },


  //List groups in the database with users that belong to a group
  listUsers: function listUsers(req, res) {
    return groupModel.all({
      attributes: ['groupName', 'discription'],
      include: [{
        model: userModel,
        as: 'usersOfThisGroup',
        attributes: ['username', 'email']
      }]
    }).then(function (data) {
      return res.status(201).send(data);
    }).catch(function (error) {
      return res.status(404).send(error.message);
    });
  },
  //end of listUsers function definition

  //List all messages belonging to a group
  groupMessages: function groupMessages(req, res) {
    return groupModel.findOne({
      where: {
        id: req.params.groupid
      },
      attributes: ['groupName', 'discription'],
      include: [{
        model: messageModel,
        as: 'messagesForThisGroup',
        attributes: ['body', 'priority']
      }]
    }).then(function (group) {
      if (!group) {
        res.status(404).send({ message: 'Group not found!' });
      } else {
        return res.status(201).send(group);
      } //end of else statement
    }).catch(function (error) {
      res.status(404).send(error.message);
    });
  }
}; //end of export default