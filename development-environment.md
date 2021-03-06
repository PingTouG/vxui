# vxui 开发环境搭建

## 技术栈

- webpack4.x
- vue2.x

## 初始化

```
npm init
```

## 创建目录

```
|—— build   ---------- webpack打包相关配置
|   |—— webpack.common.js ---------- 公用配置
|   |—— webpack.dev.js    ---------- 开发配置
|   |—— webpack.prod.js   ---------- 打包配置
|—— examples --------- 例子
|   |—— docs --------- 文档
|   |—— index.js ----- 入口文件
|—— lib    ----------- 打包后的文件
|—— packages --------- 组件源码
|   |—— index.js ----- 入口文件
|—— .babelrc
|—— .gitignore
|—— .prettierrc
|—— favicon.ico
|—— index.html
|—— logo.png
|—— package.json
|—— READMO.md
|—— README.zn-CN.md
|—— yarn.lock
```

## webpack 基本环境

### 安装依赖

- `webpack`
- `webpack-cli (webpack4.x 以上需要)`
- `webpack-merge`：用来合并配置
- `webpack-dev-server`
- `html-webpack-plugin`
- `cross-env`： 运行跨平台设置和使用环境变量的脚本，用来设置环境变量

```
yarn add -D webpack webpack-cli webpack-merge webpack-dev-server html-webpack-plugin cross-env
```

首先将配置文件分为 3 个：

- `build/webpack.common.js`：公用配置文件
- `build/webpack.dev.js`：开发配置
- `build/webpack.prod.js`：打包配置

通过`webpack-merge`合并配置，具体配置内容见文件。`webpack`配置信息见官网：[中文传送门](https://www.webpackjs.com/)、[英文传送门](https://webpack.js.org/)

### 配置脚本

在`package.json`中添加

```json
"scripts": {
  "dev": "cross-env NODE_ENV=development webpack-dev-server --config build/webpack.dev.js",
  "build": "cross-env NODE_ENV=production webpack --config build/webpack.prod.js"
}
```

`webpack.common.js`

```javascript
module.exports = {}
```

`webpack.dev.js`

```javascript
const merge = require('webpack-merge')
const base = require('./webpack.common')

module.exports = merge(base, {
  mode: 'development',
  // 开启sourceMap
  devtool: 'source-map',
})
```

`webpack.prod.js`

```javascript
const merge = require('webpack-merge')
const base = require('./webpack.common')

module.exports = merge(base, {
  mode: 'production',
})
```

## ES6+ 环境

### 安装依赖

- `babel-loader`
- `@babel/core`
- `@babel/preset-env`

```
yarn add -D babel-loader @babel/core @babel/preset-env
```

### 配置 loader

`webpack.common.js`

```diff
module.exports = {
+  module: {
+    rules: [
+      {
+        test: /\.js$/,
+        use: {
+          loader: 'babel-loader',
+          options: {
+            presets: ['@babel/preset-env']
+          }
+        },
+        exclude: /node_modules/
+      }
+    ]
+  }
}

```

## Vue 环境

### 安装依赖

- `vue`
- `vue-loader`
- `vue-template-compiler`

```
yarn add vue

yarn add -D vue-loader vue-template-compiler
```

### 配置 loader

`webpack.common.js`

```diff
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
+      {
+        test: /\.vue$/,
+        use: {
+          loader: 'vue-loader'
+        },
+        exclude: /node_moduels/
+      }
+    ]
  },
+  plugins: [new VueLoaderPlugin()]
}

```

## sass 环境

### 安装依赖

- `style-loader`
- `css-loader`
- `node-sass`
- `sass-loader`

```
yarn add -D style-loader css-loader node-sass sass-loader
```

### 配置 loader

`webpack.common.js`

```diff
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
+      {
+        test: /\.scss$/,
+        use: ['style-loader', 'css-loader', 'sass-loader'],
+        exclude: /node_moduels/
+      }
    ]
  },
  plugins: [new VueLoaderPlugin()]
}

```

## 其他配置

### 配置文件后缀

`webpack.common.js`

```diff
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
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_moduels/
      }
    ]
  },
  plugins: [new VueLoaderPlugin()],
+  resolve: {
+    extensions: ['.js', '.vue']
+  }
}

```

### 添加 `build/utils.js` 配置工具类

`build/utils.js`

```javascript
const path = require('path')

const resolve = (dir) => path.join(__dirname, dir)

const getPackageConfig = () => {
  return require(resolve('../package.json'))
}

module.exports = {
  resolve,
  getPackageConfig,
}
```

## examples 运行环境配置

### 安装依赖

- `url-loader`

```
yarn add -D url-loader
```

`webpack.dev.js`

```diff
+ const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const base = require('./webpack.common')
+ const { resolve, getPackageConfig } = require('./utils')
+
+ const packageName = getPackageConfig().name
+
module.exports = merge(base, {
mode: 'development',
+   entry: resolve('../examples/index.js'),
// 开启sourceMap
devtool: 'source-map',
+   resolve: {
+     alias: {
+       '@': resolve('../examples/src'),
+       '@v': resolve('../examples/src/views')
+     }
+   },
+   module: {
+     rules: [
+       {
+         test: /\.(png)|(jpg)|(gif)|(woff)|(svg)|(eot)|(ttf)$/,
+         use: {
+           loader: 'url-loader'
+         },
+         exclude: /node_modules/
+       }
+     ]
+   },
+   plugins: [
+     new HtmlWebpackPlugin({
+       title: packageName,
+       template: resolve('../index.html'),
+       favicon: resolve('../favicon.ico')
+     })
+   ],
+   devServer: {
+     port: 8080
+   }
})

```

### 测试

创建`examples/index.js`、`examples/src/App.vue`

`examples/index.js`

```javascript
import Vue from 'vue'
import App from '@/App'

new Vue({
  render: (h) => h(App),
}).$mount('#root')
```

`examples/src/App.vue`

```javascript
<template>
  <div class="app">
    Hello vxui
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.app {
  text-align: center;
  font-size: 20px;
}
</style>
```

运行`npm run dev`，在浏览器输入`http://localhost:8080/`查看结果

## 打包配置

### 安装依赖

- `uglifyjs-webpack-plugin`
- `optimize-css-assets-webpack-plugin`
- `clean-webpack-plugin`
- `mini-css-extract-plugin`

```
yarn add -D uglifyjs-webpack-plugin optimize-css-assets-webpack-plugin clean-webpack-plugin mini-css-extract-plugin
```

`webpack.pord.js`

```diff
const merge = require('webpack-merge')
const base = require('./webpack.common')
+ const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
+ const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
+ const { CleanWebpackPlugin } = require('clean-webpack-plugin')
+ const MiniCssExtractPlugin = require('mini-css-extract-plugin')
+ const { resolve } = require('./utils')

const packageName = 'vxui'
+ const { resolve, getPackageConfig } = require('./utils')
+
+ const packageName = getPackageConfig().name
+
module.exports = merge(base, {
mode: 'production',
+  entry: resolve('../packages/index.js'),
+  output: {
+    path: resolve('../lib'),
+    filename: `${packageName}.js`,
+    library: packageName,
+    libraryExport: 'default',
+    libraryTarget: 'umd'
+  },
+  externals: {
+    vue: {
+      root: 'Vue',
+      commonjs: 'vue',
+      commonjs2: 'vue',
+      amd: 'vue'
+    }
+  },
+  optimization: {
+    minimizer: [
+      new UglifyJsPlugin({
+        cache: true,
+        parallel: true,
+        sourceMap: true
+      }),
+      new OptimizeCSSAssetsPlugin({
+        cssProcessor: require('cssnano'),
+        cssProcessorPluginOptions: {
+          preset: ['default', { discardComments: { removeAll: true } }]
+        },
+        canPrint: true
+      })
+    ]
+  },
+  module: {
+    rules: [
+      {
+        test: /\.(sa|sc|c)ss$/,
+        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
+      }
+    ]
+  },
+  plugins: [
+    new MiniCssExtractPlugin({
+      filename: 'css/vxui.css',
+      chunkFilename: '[name].css'
+    }),
+    new CleanWebpackPlugin({
+      cleanOnceBeforeBuildPatterns: resolve('../lib/**')
+    })
+  ]
+})

```

`package.json`

```diff
{
  "name": "vxui",
  "version": "0.0.1",
  "description": "基于VUE开发的UI组件库",
+  "private": false,
+  "main": "lib/vxui.js",
  "scripts": {
-    "dev": "cross-env NODE_ENV=development webpack-dev-server --config build/webpack.dev.js",
+    "dev": "npm run build && cross-env NODE_ENV=development webpack-dev-server --config build/webpack.dev.js",
    "build": "cross-env NODE_ENV=production webpack --config build/webpack.prod.js"
  },
  "keywords": [
    "vue",
    "ui"
  ],
  "author": "PingTouG <2798874773@qq.com>",
  "license": "MIT",
  "devDependencies": {
    "@babel/core": "^7.7.7",
    "@babel/preset-env": "^7.7.7",
    "babel-loader": "^8.0.6",
    "cross-env": "^6.0.3",
    "css-loader": "^3.4.0",
    "html-webpack-plugin": "^3.2.0",
    "node-sass": "^4.13.0",
    "sass-loader": "^8.0.0",
    "style-loader": "^1.1.1",
    "vue-loader": "^15.8.3",
    "vue-template-compiler": "^2.6.11",
    "webpack": "^4.41.4",
    "webpack-cli": "^3.3.10",
    "webpack-dev-server": "^3.10.1",
    "webpack-merge": "^4.2.2"
  },
  "dependencies": {
    "vue": "^2.6.11"
  }
}

```

### 测试

`examples/index.js`

```diff
import Vue from 'vue'
import App from '@/App'
+ import VXUI from '../lib/vxui.js'
+
+ Vue.use(VXUI)

new Vue({
  render: h => h(App)
}).$mount('#root')

```

`examples/src/App.vue`

```diff
<template>
  <div class="app">
    Hello vxui
+    <x-button />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.app {
  text-align: center;
  font-size: 20px;
}
</style>

```

运行`npm run dev`，在浏览器输入`http://localhost:8080/`查看结果

## 文档环境配置

### 安装依赖包

- `vuepress`
- `vuepress-plugin-demo-code`

```
yarn add -D vuepress vuepress-plugin-demo-code
```

### 配置简单介绍

文档环境是通过`vuepress`搭建的，详细配置参考[官方文档](https://vuepress.vuejs.org/)

vuepress 配置文件是在`.vuepress/config.js`(此文件名是固定的)。

- title: 网站标题
- base: 网站基础 url
- description: 网站描述
- head：额外的需要被注入到当前页面的 HTML <head> 中的标签
- themeConfig：主题配置(nav：配置导航，sidebar：侧边栏)

配置代码如下：

```javascript
module.exports = {
  title: 'VXUI',
  description: '基于Vue开发的组件库',
  base: '/',
  head: [['link', { rel: 'icon', href: 'favicon.ico' }]],
  themeConfig: {
    nav: [
      { text: '指南', link: '/installation' },
      { text: 'GitHub', link: 'https://github.com/PingTouG/vxui' },
    ],
    sidebar: [
      {
        title: '开发指南',
        collapsable: false,
        children: [
          ['/installation', '安装'],
          ['/quickstart', '快速开始'],
        ],
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          {
            title: 'Basic',
            collapsable: false,
            children: [
              ['/components/icon', 'Icon 图标'],
              ['/components/button', 'Button 按钮'],
            ],
          },
        ],
      },
    ],
    sidebarDepth: 0,
  },
}
```

> 其中，需要用到图片，`.vuepress/public/`目录下用于存放静态文件，所以将`favicon.ico`、`logo.png`放在此目录下

### 样式配置

`.vuepress/styles/`目录下用于存放样式，若想更改默认主题颜色，则需要创建一个`palette.styl`文件，具体配置见官网：[传送门](https://vuepress.vuejs.org/zh/config/#palette-styl)。若想更改样式，则创建一个`index.styl`文件，此文件定义的样式具有比默认样式更高的优先级(会生成在最终的 CSS 文件结尾)

#### 应用级配置

通过`.vuepress/enhanceApp.js`来配置，可以在此文件中注入组件库用于写用例

`.vuepress/enhanceApp.js`

```javascript
import VXUI from '../../../packages'

export default ({ Vue }) => {
  Vue.use(VXUI)
}
```

#### 配置用例代码块

现有的 demoBlock 插件我发现了两个，`vuepress-plugin-demo-block`,`vuepress-plugin-demo-code`，其中后者是参考前者写的。
一开始用的是前者，但无法使用`packages`中的组件，所以放弃了，使用了后者，即：`vuepress-plugin-demo-code`[github](https://github.com/BuptStEve/vuepress-plugin-demo-code)。

先安装此插件，上面我已经安装过了，在`.vuepress/config.js`添加如下代码

```diff
module.exports = {
  title: 'VXUI',
  description: '基于Vue开发的组件库',
  base: '/',
  head: [['link', { rel: 'icon', href: 'favicon.ico' }]],
  themeConfig: {
    nav: [
      { text: '指南', link: '/installation' },
      { text: 'GitHub', link: 'https://github.com/PingTouG/vxui' }
    ],
    sidebar: [
      {
        title: '开发指南',
        collapsable: false,
        children: [
          ['/installation', '安装'],
          ['/quickstart', '快速开始']
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          {
            title: 'Basic',
            collapsable: false,
            children: [
              ['/components/icon', 'Icon 图标'],
              ['/components/button', 'Button 按钮']
            ]
          }
        ]
      }
    ],
    sidebarDepth: 0
  },
+  plugins: [
+    [
+      'demo-code',
+      {
+        showText: '显示代码',
+        hideText: '隐藏代码',
+        minHeight: 0,
+        onlineBtns: {
+          codepen: false,
+          jsfiddle: false,
+          codesandbox: false
+        },
+        demoCodeMark: 'demo'
+      }
+    ]
+  ]
}

```

如果直接拿的 github 上的例子，会发现代码块无法完全隐藏，因为那个例子`minHeight: 200`，不知道作者的用意是什么，在此改成 0，并将`showText`，`hideText`改成了汉字，将在线打开的按钮全部关闭，设置`demoCodeMark: 'demo'`(默认也是 demo)。`demoCodeMark`是用来定义标识用例块的标识符(`::: demo 用例代码 :::`)。

最后再调整一下显示代码条的样式
`.vuepress\styles\index.styl`

```css
.control-btn {
  border: 1px solid #eee;
  font-size: 14px;
  color: #ccc;
}

.arrow-icon {
  border-bottom-color: #ccc !important;
}

.control-btn:hover {
  color: #000;
}

.control-btn:hover .arrow-icon {
  border-bottom-color: #000 !important;
}
```

使用

```
::: demo
<x-button @click="handleClick">默认按钮</x-button>

<script>
export default {
  methods:{
    handleClick(){
      alert('测试')
    }
  }
}
</script>
:::

```

### 发布并托管 GitHub

#### 安装依赖

- `gh-pages`

```
yarn add -D gh-pages
```

#### 配置 gh-pages

`package.json`

```diff
{
  "name": "@pingtoug/vxui",
  "version": "0.0.4",
  "description": "基于Vue开发的UI组件库",
  "private": false,
  "main": "lib/vxui.js",
  "scripts": {
    "dev": "cross-env NODE_ENV=development webpack-dev-server --config build/webpack.dev.js",
    "build": "cross-env NODE_ENV=production webpack --config build/webpack.prod.js",
    "docs:dev": "vuepress dev examples/docs",
-    "docs:build": "vuepress build examples/docs"
+    "docs:build": "vuepress build examples/docs && gh-pages -d docs"
  },
  "keywords": [
    "vue",
    "ui"
  ],
  "files": [
    "lib"
  ],
  "author": "PingTouG <2798874773@qq.com>",
  "license": "MIT",
  "devDependencies": {
    "@babel/core": "^7.7.7",
    "@babel/preset-env": "^7.7.7",
    "@vuepress/plugin-back-to-top": "^1.2.0",
    "babel-loader": "^8.0.6",
    "clean-webpack-plugin": "^3.0.0",
    "cross-env": "^6.0.3",
    "css-loader": "^3.4.0",
    "cssnano": "^4.1.10",
    "extract-text-webpack-plugin": "^4.0.0-beta.0",
    "gh-pages": "^2.1.1",
    "html-webpack-plugin": "^3.2.0",
    "mini-css-extract-plugin": "^0.9.0",
    "node-sass": "^4.13.0",
    "optimize-css-assets-webpack-plugin": "^5.0.3",
    "sass-loader": "^8.0.0",
    "style-loader": "^1.1.1",
    "uglifyjs-webpack-plugin": "^2.2.0",
    "url-loader": "^3.0.0",
    "vue-loader": "^15.8.3",
    "vue-template-compiler": "^2.6.11",
    "vuepress": "^1.2.0",
    "vuepress-plugin-demo-code": "^0.5.0",
    "webpack": "^4.41.4",
    "webpack-cli": "^3.3.10",
    "webpack-dev-server": "^3.10.1",
    "webpack-merge": "^4.2.2"
  },
  "dependencies": {
    "vue": "^2.6.11"
  }
}

```

> 执行`yarn docs:build`，成功之后会在 GitHub 上创建一个分支`gh-pages`，然后在此项目的`Settgings`中找到`GitHub Pages`，在此选项中会出现部署的静态网站地址：`Your site is published at https://pingtoug.github.io/vxui/`
