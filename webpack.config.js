const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: path.join(__dirname, "src", "main.tsx"),
  mode: "development",
  output: {
    path: path.join(__dirname, "build"),
    filename: "react_bundle.js",
  },
  devServer: {
    port: 3000,
    static: path.join(__dirname, "build"),
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js||jsx||ts||tsx)$/,
        exclude: [/node_modules/],
        use: ["babel-loader"],
        resolve: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },

      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },

      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "build", "index.html"),
    }),
    new MiniCssExtractPlugin({ filename: "styles_bundle.css" }),
    
  ],
};
