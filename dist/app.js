'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _routes = require('./server/routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
/* The heart and soul of the app. The core script of the app. i.e the heart of the app.**/
/*
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const sessions = require('express-session'); */

app.use('/css', _express2.default.static('../template/css'));
app.use('/javascript', _express2.default.static('../template/javascript'));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use((0, _morgan2.default)('dev'));
app.use((0, _expressSession2.default)({
  secret: '£$%$5445&**&(&566**&^&&^6',
  resave: false,
  saveUninitialized: true
}));
app.use('/', _routes2.default);
/*
// Require our routes into the application.
require('./server/routes')(app);*/
//routes(app);


app.listen(1111, function () {
  console.log('Server is up and listening!... ');
});

exports.default = app;