const path = require("path");
const GasPlugin = require("gas-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDevelopment ? "development" : "production",
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
