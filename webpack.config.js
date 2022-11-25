/* eslint-disable import/no-unresolved */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DotEnv = require('dotenv-webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new DotEnv(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext]',
        },
      },
      {
        test: /\.svg$/,
        use: ['svg-url-loader'],
        generator: {
          filename: 'assets/images/[name][ext]',
        },
      },
    ],
  },
  devServer: {
    static: './dist',
  },
  // optimization: {
  //   runtimeChunk: 'single',
  // },
};
