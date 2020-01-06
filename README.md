<p align="center">
  <img src="./logo.png" />
</p>
<p align="center">
  基于Vue开发的UI组件库
</p>

English | [中文](https://github.com/PingTouG/vxui/blob/master/README.zn-CN.md) | [UI 库开发环境搭建文档](https://github.com/PingTouG/vxui/blob/master/development-environment.md)

## Install

```
npm i @pingtoug/vxui
或
yarn add @pingtoug/vxui
```

## Quick Start

```javascript
// 引入样式
import '@pingtoug/vxui/lib/css/vxui.css'

import VXUI from '@pingtoug/vxui'
Vue.use(VXUI)

// or
import { XButton } from '@pingtoug/vxui'
Vue.use(XButton)
```

> 按需引入组件，但样式还是需要全部引入，目前无法做到样式按需引入

## DOCS

[中文](https://pingtoug.github.io/vxui)

## LICENSE

[MIT](https://github.com/PingTouG/vxui/blob/master/LICENSE.md)
