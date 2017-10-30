const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HappyPack = require('happypack');

module.exports = {
  entry: path.resolve(__dirname, 'dev/index.vue'),
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm.js',
    },
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: 'happypack/loader',
          },
        },
      },
      /* {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader',
      },
      {
        test: /\.(ttf|jpg|gif|png)$/,
        loader: 'file-loader?name=src/[name].[ext]',
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      }, */
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './src/index.js',
    chunkFilename: 'index',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(''),
      },
    }),
    new HappyPack({
      loaders: ['babel-loader'],
    }),
    new HtmlWebpackPlugin({
      title: 'title',
      filename: 'index.html',
      template: 'dev/index.html',
      inject: 'body',
    })],
};
