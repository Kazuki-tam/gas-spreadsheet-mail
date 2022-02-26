const path = require("path");
const GasPlugin = require("gas-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    sendEmail: "./src/main.ts",
    testEmail: "./src/testEmail.ts",
  },
  devtool: false,
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts"],
  },
  plugins: [new GasPlugin()],
};
