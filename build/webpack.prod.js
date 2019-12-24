const merge = require('webpack-merge')
const base = require('./webpack.common')
const { resolve, getPackageConfig } = require('./utils')

const packageName = getPackageConfig().name

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
  }
})
