
import path from 'path';

const entryPath = path.resolve(__dirname,'client','src','index.jsx');
const outputPath = path.resolve(__dirname,'client','public');

const config = {
  entry: entryPath,
  output: {
    path: outputPath,
    filename: 'bundle.js'
  },
  externals: {
    cheerio: 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  module: {
    loaders: [{
      test: /\.jsx?/, 
      loader: 'babel-loader',
      exclude: path.resolve(__dirname,'node_modules')}
    ]
  }
};

export default config;