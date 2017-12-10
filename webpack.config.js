'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var entryPath = _path2.default.resolve(__dirname, 'client', 'src', 'index.jsx');
var outputPath = _path2.default.resolve(__dirname, 'client', 'public');

var config = {
  entry: entryPath,
  output: {
    path: outputPath,
    filename: 'bundle.js'
  },
  externals: {
    cheerio: 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
  module: {
    loaders: [{
      test: /\.jsx?/,
      loader: 'babel-loader',
      exclude: _path2.default.resolve(__dirname, 'node_modules') }]
  }
};

exports.default = config;
