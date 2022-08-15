const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  plugins: [],
  optimization: {
    minimize: false,
    usedExports: false,
    sideEffects: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          mangle: false,
          compress: {
            unused: false,
            dead_code: false,
          },
        },
      }),
    ],
  },
});
