const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

// Константы для путей
const root = path.join(__dirname); // path = */app
const pathContentBase = path.join(root, 'dist');

// Конфиги для правил сборки
const cssConfig = {
  test: /\.(scss|css)$/,
  include: [
    path.resolve(__dirname, 'css'),
    path.resolve(__dirname, 'node_modules'),
  ],
  use: [
    { loader: 'style-loader' },
    { loader: 'css-loader' },
    // { loader: 'postcss-loader' },
    { loader: 'sass-loader' },
  ],
};
const cssModulesConfig = {
  test: /\.(scss|css)$/,
  exclude: [
    path.resolve(__dirname, 'css'),
    path.resolve(__dirname, 'node_modules'),
  ],
  use: [
    { loader: 'style-loader' },
    {
      loader: 'css-loader',
      options: {
        modules: true,
        localIdentName: '[folder]__[local]__[hash:base64:8]',
      },
    },
    // { loader: 'postcss-loader' },
    { loader: 'sass-loader' },
  ],
};
const imgConfig = {
  test: /\.(pdf|jpg|png|gif|ico)$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'url-loader',
      options: {
        name: 'img/[name].[ext]',
        publicPath: '/',
        limit: 1000, // меньше этого размера файлы будут переводиться в base64 inline
      },
    },
  ],
};

// Конфиг только для дев режима (локальная работа)
const configDev = {
  mode: 'development',
  watch: true,
  devtool: 'cheap-module-eval-source-map', // source-map
  output: {
    path: pathContentBase,
    publicPath: '/',
  },
  module: {
    rules: [
      cssConfig,
      cssModulesConfig,
      imgConfig,
    ],
  },
  plugins: [
    // activates HMR
    new webpack.HotModuleReplacementPlugin(),

    // prints more readable module names in the browser console on HMR updates
    new webpack.NamedModulesPlugin(),
  ],

  devServer: {
    contentBase: pathContentBase,
    port: 3000,
    historyApiFallback: true,
    hotOnly: true,
  },
};

module.exports = merge(common, configDev);
