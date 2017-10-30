const path = require('path');
const webpack = require('webpack');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HappyPack = require('happypack');

module.exports = {
  entry: path.resolve(__dirname, 'dev/index.vue'),
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.min.js',
    },
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
    filename: './src/index-[chunkHash:8].js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new HappyPack({
      loaders: ['babel-loader'],
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'dev/index.html',
      inject: 'body',
    }),
    new ParallelUglifyPlugin({
      test: /.js$/,
      exclude: './node_modules',
      cacheDir: './.uglifycache',
      workerCount: 3,
    })],
};
