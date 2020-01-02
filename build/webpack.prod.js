const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const merge = require('webpack-merge')
const base = require('./webpack.common')
const { resolve } = require('./utils')

const packageName = 'vxui'

module.exports = merge(base, {
  mode: 'production',
  entry: resolve('../packages/index.js'),
  output: {
    path: resolve('../lib'),
    filename: `${packageName}.js`,
    library: packageName,
    libraryExport: 'default',
    libraryTarget: 'umd'
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin()
    ]
  }
})
