/* eslint-disable @typescript-eslint/no-var-requires */
const { join } = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const entries = {
  main: {
    filename: "main.js",
    import: join(__dirname, "../src/scripts/main.js"),
  },
};

Object.keys(entries).forEach((page) => {
  const htmlPlugin = new HtmlWebpackPlugin({
    inject: true,
    title: `${page} title`,
    template: join(__dirname, `../public/${page}.html`),
    filename: `${page}.html`,
    chunks: [page],
  });
  plugins.push(htmlPlugin);
});

module.exports = {
  entry: entries,
  output: {
    filename: "[name].bundle.js",
    path: join(__dirname, "../dist"),
    publicPath: "/dist",
  },
  module: {},
  plugins: [new CleanWebpackPlugin()],
  resolve: {
    extensions: [".js"],
  },
};
