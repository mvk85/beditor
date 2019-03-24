/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const common = require('./webpack.common.js');

const root = path.join(__dirname); // path = */app
const pathContentBase = path.join(root, 'dist');

const cssConfig = {
  test: /\.(scss|css)$/,
  include: [
    path.resolve(__dirname, 'css'),
    path.resolve(__dirname, 'node_modules'),
  ],
  use: [
    MiniCssExtractPlugin.loader,
    { loader: 'css-loader' },
    { loader: 'postcss-loader' },
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
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        modules: true,
        localIdentName: '[folder]__[local]__[hash:base64:8]',
      },
    },
    { loader: 'postcss-loader' },
    { loader: 'sass-loader' },
  ],
};
const imgConfig = {
  test: /\.(pdf|jpg|png|gif|ico)$/,
  exclude: /font/,
  use: [
    {
      loader: 'url-loader?limit=20480&name=img/[name]-[hash].[ext]',
    },
  ],
};

const configProd = {
  mode: 'production',
  devtool: false, // 'source-map',
  module: {
    rules: [
      cssConfig,
      cssModulesConfig,
      imgConfig,
    ],
  },

  output: {
    path: pathContentBase,
    publicPath: '/',
    filename: 'frontend-[hash].js',
  },

  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
  ],
};

module.exports = merge(common, configProd);
