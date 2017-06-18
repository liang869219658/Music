var webpack = require('webpack');
var config = require('./base');
var path = require("path");
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');   //单独分离css


var rootPath = config.commonPath.rootPath;     // 项目根目录
var srcPath = config.commonPath.srcPath;             // 开发源码目录
var publicPath = config.commonPath.public;

/**
 * ouput config
 * @type {String}
 */
config.output.filename = '[name].[chunkhash:6].js';
config.output.chunkFilename= '[name].[chunkhash:6].chunk.js';

/**
 * devtool config
 * @type {String}
 */
config.devtool = "cheap-source-map";

/**
 * loaders config
 * @type {RegExp}
 */

config.module.loaders.push({
  test: /\.css$/,
  loader: ExtractTextPlugin.extract('style', 'css')
}, {
  test: /\.less$/,
  loader: ExtractTextPlugin.extract('style', 'css!less')
});

/**
 * plugins config
 * @type {[type]}
 */
config.plugins.push(
  // stataic目录下静态资源的复制
  new CopyWebpackPlugin([ {
      context: config.commonPath.rootPath,
      from: 'static/*',
      ignore: ['*.md']
    }
  ]),
  new webpack.optimize.DedupePlugin(),    //去重
  new webpack.optimize.UglifyJsPlugin({   //压缩
    compress: {
      warnings: false
    }
  }),
  //公共代码分离打包
  new webpack.optimize.CommonsChunkPlugin({
    names: ['vendor', 'mainifest'],
  }),
  //若要按需加载 CSS 则请注释掉该行
  new ExtractTextPlugin('[name].[contenthash:6].css', {
    allChunks : true
  })
);

module.exports = config;
