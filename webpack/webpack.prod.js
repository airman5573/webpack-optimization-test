const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  plugins: [],
  optimization: {
    minimize: false,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          mangle: false,
          compress: {
            dead_code: false,
            unused: false,
          },
        },
      }),
    ],
  },
});
