const path = require('path');
const webpack = require('webpack');

const serverConfig = {
  target: 'node',
  entry: './lib/date-path.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'date-path.js',
    libraryTarget: 'umd',
    library: 'datePath'
  }
};

const clientConfig = {
  target: 'web',
  entry: './lib/date-path.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'date-path.min.js',
    libraryTarget: 'umd',
    library: 'datePath'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
}

module.exports = [ serverConfig, clientConfig ];
