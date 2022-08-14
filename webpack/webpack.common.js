/* eslint-disable @typescript-eslint/no-var-requires */
const { join } = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: join(__dirname, "../src/index.jsx"),
  output: {
    filename: "[name].bundle.js",
    path: join(__dirname, "../dist"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: join(__dirname, "../public/index.html"),
    }),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    extensions: [".esm.js", ".js", ".jsx"],
  },
};
