const HtmlWebpackPlugin = require("html-webpack-plugin")

const htmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: "./index.html",
  filename: 'index.html',
  inject: "body"
})
module.exports = {

  entry: "./src/App.jsx",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js(x)$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.(s*)css$/, use: ["style-loader", "css-loader", "sass-loader"] }

    ]
  },
  plugins: [htmlWebpackPluginConfig]

}