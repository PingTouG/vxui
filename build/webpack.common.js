const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader'
        },
        exclude: /node_moduels/
      },
      {
        test: /\.(png)|(jpg)|(gif)|(woff)|(svg)|(eot)|(ttf)$/,
        use: {
          loader: 'url-loader'
        },
        exclude: /node_modules/
      }
    ]
  },
  plugins: [new VueLoaderPlugin()],
  resolve: {
    extensions: ['.js', '.vue']
  }
}
