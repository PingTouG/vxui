const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
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
    // 分离到文件中，还存在问题，暂不分离
    // splitChunks: {
    //   cacheGroups: {
    //     iconStyles: {
    //       name: 'css/icon',
    //       test: /\.css$/,
    //       chunks: 'all',
    //       enforce: true
    //     },
    //     rowStyles: {
    //       name: 'css/row',
    //       test: /row\.scss/,
    //       chunks: 'all',
    //       enforce: true
    //     },
    //     colStyles: {
    //       name: 'css/col',
    //       test: /col\.scss/,
    //       chunks: 'all',
    //       enforce: true
    //     }
    //   }
    // },
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }]
        },
        canPrint: true
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/vxui.css',
      chunkFilename: '[name].css'
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: resolve('../lib/**')
      // cleanAfterEveryBuildPatterns: [resolve('../lib/*.js'), '!vxui.js']
    })
  ]
})
