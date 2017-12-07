'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var entryPath = _path2.default.resolve(__dirname, 'client', 'src', 'routes.jsx');
var outputPath = _path2.default.resolve(__dirname, 'client', 'public');

var config = {
  entry: entryPath,
  output: {
    path: outputPath,
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?/,
      loader: 'babel-loader',
      exclude: _path2.default.resolve(__dirname, 'node_modules') }]
  }
};

exports.default = config;
