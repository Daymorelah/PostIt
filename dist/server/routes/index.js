'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _controllers = require('../controllers');

var _controllers2 = _interopRequireDefault(_controllers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userController = _controllers2.default.Users;
var groupController = _controllers2.default.Groups;
var messageController = _controllers2.default.Messages;

var routes = function routes(app) {

  app.get('/api/v1', function (req, res) {
    return res.status(200).send({
      message: 'Welcome to the PostIt API!'
    });
  });
  app.post('/api/v1/user/signup', userController.signup);
  app.post('/api/v1/user/login', userController.login);
  app.get('/api/v1/user/list', userController.list);
  app.get('/api/v1/group/list', groupController.listUsers);
  app.post('/api/v1/group', groupController.createGroup);
  app.post('/api/v1/group/:groupid/user', groupController.addUser);
  app.post('/api/v1/group/:groupid/message', messageController.sendMessage);
  app.get('/api/v1/message/list', messageController.getMessages);
  app.get('/api/v1/group/:groupid/messages', groupController.groupMessages);

  app.use(_express2.default.static(_path2.default.resolve('client', 'public')));
  app.use(_express2.default.static(_path2.default.resolve('apiDocDist')));
  //serve API documentation when this route is used.
  app.get('/api/v1/documentation', function (req, res) {
    res.sendFile('index.html', { root: _path2.default.resolve('apiDocDist') });
  }); //end of get http method.

  //Serve front-end home page
  app.get('/home', function (req, res) {
    res.sendFile('index.html', { root: _path2.default.resolve('client', 'public') });
  }); //end of get http method

  //Serve front-end sign-up page
  app.get('/signUpPage', function (req, res) {
    res.sendFile('index.html', { root: _path2.default.resolve('client', 'public') });
  }); //end of get http method

  //Serve front-end login page
  app.get('/loginPage', function (req, res) {
    res.sendFile('index.html', { root: _path2.default.resolve('client', 'public') });
  }); //end of get http method
}; //end of arrow function definition

exports.default = routes;