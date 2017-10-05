'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var messageModel = _models2.default.Message;
var groupModel = _models2.default.Group;

exports.default = {
  //sends a message to a group
  sendMessage: function sendMessage(req, res) {
    return groupModel.findById(req.params.groupid).then(function (group) {
      if (!group) {
        res.status(201).send({ message: 'Group not found!' });
      } else {
        return messageModel.create({
          body: req.body.message,
          groupId: req.params.groupid,
          priority: req.body.priority
        }).then(function (message) {
          res.status(201).send({
            message: 'Message sent to group ' + message.groupId + ' succesfully'
          }); //ens of send method
        }).catch(function (error) {
          return res.status(400).send(error.message);
        });
      } //end of else statement
    }).catch(function (error) {
      return res.status(400).send(error.message);
    });
  },
  //end of send message function defintion

  //List all messages from the database with the group it belong's to
  getMessages: function getMessages(req, res) {
    return messageModel.all({
      attributes: ['body', 'priority'],
      include: [{
        model: groupModel,
        as: 'group',
        attributes: ['groupName']
      }]
    }).then(function (messages) {
      res.status(201).send(messages);
    }).catch(function (error) {
      return res.status(400).send(error.message);
    });
  }
}; //end of export default