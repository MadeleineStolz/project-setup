const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    public: ["./src/js/index.js", "./src/sass/index.scss"],
  },
  output: {
    path: path.resolve(__dirname, "./dist/"),
  },
  module: {
    rules: [
      {
        test: /.scss$/,
        use: [
          {
            loader: "file-loader",

            options: {
              name: "[name].css",
              outputPath: "./",
            },
          },
          {
            loader: "extract-loader",
          },
          {
            loader: "css-loader",
            options: {
              url: false,
            },
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: 'asset/resource'
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Design System",
      template: "src/design-system.html",
      filename: "design-system.html",
    }),
    new HtmlWebpackPlugin({
      title: "My Index",
      template: "src/index.html",
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      title: "about",
      template: "src/partials/about.html",
      filename: "about.html",
    }),
    new CopyWebpackPlugin({
      patterns:[{from:"src/images",to:"images"}]
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
};
