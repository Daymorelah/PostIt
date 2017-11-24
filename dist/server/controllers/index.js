'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _users = require('./users');

var _users2 = _interopRequireDefault(_users);

var _groups = require('./groups');

var _groups2 = _interopRequireDefault(_groups);

var _messages = require('./messages');

var _messages2 = _interopRequireDefault(_messages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  Users: _users2.default,
  Groups: _groups2.default,
  Messages: _messages2.default
};