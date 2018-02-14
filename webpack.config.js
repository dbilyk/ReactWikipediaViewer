const HtmlWebpackPlugin = require("html-webpack-plugin")

const htmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: "./index.html",
  filename: 'index.html',
  inject: "body"
})
module.exports = {

  entry: "./src/app.jsx",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  plugins: [htmlWebpackPluginConfig]

}