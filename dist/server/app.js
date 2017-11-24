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

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));

if (app.get('env') !== 'test') {
  /* istanbul ignore next */
  app.use((0, _morgan2.default)('dev'));
}

(0, _routes2.default)(app);

var port = process.env.PORT || 1111;

app.listen(port, function () {
  console.log('Server is up and listening on ... ', port);
});

exports.default = app;