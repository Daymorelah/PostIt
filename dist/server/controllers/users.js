'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var salt = 10;
var userModel = _models2.default.User;
var groupModel = _models2.default.Group;

exports.default = {
  //sign up a new user to use the app
  signup: function signup(req, res) {
    return userModel.findOne({
      where: {
        username: req.body.username
      }
    }).then(function (userName) {
      if (userName) {
        res.status(201).send({ message: 'Username already exist' });
      } else {
        return userModel.create({
          username: req.body.username,
          password: _bcrypt2.default.hashSync(req.body.password, salt),
          email: req.body.email
        }).then(function (data) {
          res.status(201).send({
            message: 'User ' + data.username + ' created successfully'
          }); //end of send method
        }).catch(function (error) {
          return res.status(400).send(error.message);
        });
      } //end of else statement
    }).catch(function (error) {
      return res.status(400).send(error.message);
    }); //end of then method
  },
  //end of signUp function definition

  //log a user into the app
  login: function login(req, res) {
    return userModel.findOne({
      where: { username: req.body.username
      }
    }).then(function (user) {
      if (!user) {
        res.status(201).send({ message: 'Username or Password does not exist' });
      } else if (!_bcrypt2.default.compareSync(req.body.password, user.password)) {
        res.status(201).send({ message: 'Username or Password does not exist' });
      } //end of else if statement
      else {
          res.status(200).send({ message: 'Login successful' });
        } //end of else statement
    }).catch(function (error) {
      return res.status(404).send(error.message);
    });
  },


  //List users in the database.
  list: function list(req, res) {
    return userModel.all({ attributes: ['username', 'email'],
      include: [{
        model: groupModel,
        as: 'groupsForThisUser',
        attributes: ['groupName', 'discription']
      }]
    }).then(function (data) {
      return res.status(201).send(data);
    }).catch(function (error) {
      return res.status(404).send(error.message);
    });
  }
};