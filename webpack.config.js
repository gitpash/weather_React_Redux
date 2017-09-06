/* eslint-disable */
const webpack = require('webpack');

module.exports = {
  entry: ['webpack-dev-server/client?http://localhost:8080', 'webpack/hot/only-dev-server', './src/index.js'],
  stats: {
    assets: false,
    colors: true,
    version: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    children: false
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: ['react-hot-loader/webpack', 'babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  devtool: 'inline-source-map',
  plugins: [new webpack.NamedModulesPlugin()]
};
