const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// Константы для путей
const root = path.join(__dirname); // path = */app
const pathApp = path.join(root, 'src/index.js');
const pathJsSource = path.join(root, 'src');
const pathNodeModules = path.join(root, 'node_modules');

// Конфиги для правил сборки
const fileConfig = {
  test: /\.(ttf|eot|woff|woff2|svg)$/,
  exclude: /src/,
  loader: 'file-loader?name=assets/font/[name].[ext]',
};
const jsConfig = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: { loader: 'babel-loader' },
};
const svgConfig = {
  test: /\.svg$/,
  exclude: /css/,
  use: {
    loader: 'svg-sprite-loader',
  },
};

// Общий конфиг для dev and prod режимов сборки
const config = {
  entry: {
    app: pathApp,
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [
      pathNodeModules,
      pathJsSource,
    ],
  },

  module: {
    rules: [
      jsConfig,
      fileConfig,
      svgConfig,
    ],
  },

  plugins: [
    // удаляет папку dist каждый раз при сборке
    new CleanWebpackPlugin({
      verbose: true,
      dry: false,
      // root: __dirname,
    }),

    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),

    // копирует все файлы из указанного адреса в /dist или в hmr сборку
    // можно добавлять необходимые пути в массив
    new CopyWebpackPlugin([
      'src/static',
    ]),
  ],
};

module.exports = config;
