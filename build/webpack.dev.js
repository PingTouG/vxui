const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const base = require('./webpack.common')
const { resolve, getPackageConfig } = require('./utils')

const packageName = getPackageConfig().name

module.exports = merge(base, {
  mode: 'development',
  entry: resolve('../examples/index.js'),
  // 开启sourceMap
  devtool: 'source-map',
  resolve: {
    alias: {
      '@': resolve('../examples'),
      '@v': resolve('../examples/views')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: packageName,
      template: resolve('../index.html'),
      favicon: resolve('../favicon.ico')
    })
  ],
  devServer: {
    port: 8080
  }
})
