const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'production',
  entry: "./client/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
    clean: true
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: "./client/index.html",
    }),
    new MiniCssExtractPlugin({filename: 'styles.css',})
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /.(css|scss)$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  devServer: {
    port: 8081,
    proxy: {
      "/": "http://localhost:3000",
    },
  },
};
