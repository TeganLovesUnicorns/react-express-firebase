const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = [{

  devtool: 'source-map',
  entry: ['./src/index.js',
    './res/scss/main.scss',
  ],
  module: {
    loaders: [
      // handles the react components and all other JS and bundles it to es2015 standards
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      // Handles any errant .jsx files that made their way into the project
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      // handles scss styling and writes DRY css.
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader', 'postcss-loader'],
        }),
      },
      // handles any image files
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'images/',
          },
        }],
      },
    ],
  },
  output: {
    filename: 'public/bundle.js',
    path: __dirname,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new UglifyJSPlugin({
      sourceMap: true,
    }),
    new ExtractTextPlugin('public/styles.css'),
    new OptimizeCssAssetsPlugin(),
  ],
}];
