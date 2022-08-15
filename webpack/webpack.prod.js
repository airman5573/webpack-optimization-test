const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const TerserPlugin = require("webpack-terser-plugin");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  plugins: [],
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          mingle: false,
        },
      }),
    ],
  },
});
