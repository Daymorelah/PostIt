'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(_express2.default.static(_path2.default.resolve('apiDocDist')));

// app.use( (req, res, next) =>{
// '*' is not good for production. Only if the API consumable is for public use.
// res.header('Access-Control-Allow-Origin', '*'); //allow another domain use ur api.
// res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
// next();});

if (app.get('env') !== 'test') {
  /* istanbul ignore next */
  app.use((0, _morgan2.default)('dev'));
}

app.get('/api/v1/documentation', function (req, res) {
  res.sendFile('index.html', { root: _path2.default.resolve('apiDocDist') });
}); //end of get method.

(0, _routes2.default)(app);

var port = process.env.PORT || 1111;

app.listen(port, function () {
  console.log('Server is up and listening on ... ', port);
});

exports.default = app;