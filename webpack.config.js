const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: [
    "webpack-dev-server/client?http://localhost:8080",
    "webpack/hot/only-dev-server",
    "./src/index.js"
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        loaders: [
          "style-loader?sourceMap",
          "css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]"
        ]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".css"]
  },
  output: {
    path: `${__dirname}/dist`,
    publicPath: "/",
    filename: "bundle.js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({ template: "./app/index.html" }),
    new webpack.NamedModulesPlugin()
  ],
  devServer: {
    contentBase: "./dist",
    hot: true
  }
};
