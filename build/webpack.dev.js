const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const base = require('./webpack.common')
const { resolve } = require('./utils')

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
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_moduels/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'vxui',
      template: resolve('../index.html'),
      favicon: resolve('../favicon.ico')
    })
  ],
  devServer: {
    port: 8080
  }
})
