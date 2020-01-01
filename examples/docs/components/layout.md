## Layout 布局

> 通过基础的 24 分栏，迅速简便地创建布局

`此页面的样式设置`

::: demo

<style>
  .x-row {
    margin-bottom: 20px;
  }

  .x-row:last-child {
    margin-bottom: 0;
  }

  .x-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>

:::

### 基础布局

> 使用单一分栏创建基础的栅格布局：通过 row 和 col 组件，并通过 col 组件的 span 属性我们就可以自由地组合布局

::: demo

<x-row>
  <x-col :span="24"><div class="grid-content bg-purple-dark"></div></x-col>
</x-row>
<x-row>
  <x-col :span="12"><div class="grid-content bg-purple"></div></x-col>
  <x-col :span="12"><div class="grid-content bg-purple-light"></div></x-col>
</x-row>
<x-row>
  <x-col :span="8"><div class="grid-content bg-purple"></div></x-col>
  <x-col :span="8"><div class="grid-content bg-purple-light"></div></x-col>
  <x-col :span="8"><div class="grid-content bg-purple"></div></x-col>
</x-row>
<x-row>
  <x-col :span="6"><div class="grid-content bg-purple"></div></x-col>
  <x-col :span="6"><div class="grid-content bg-purple-light"></div></x-col>
  <x-col :span="6"><div class="grid-content bg-purple"></div></x-col>
  <x-col :span="6"><div class="grid-content bg-purple-light"></div></x-col>
</x-row>
<x-row>
  <x-col :span="4"><div class="grid-content bg-purple"></div></x-col>
  <x-col :span="4"><div class="grid-content bg-purple-light"></div></x-col>
  <x-col :span="4"><div class="grid-content bg-purple"></div></x-col>
  <x-col :span="4"><div class="grid-content bg-purple-light"></div></x-col>
  <x-col :span="4"><div class="grid-content bg-purple"></div></x-col>
  <x-col :span="4"><div class="grid-content bg-purple-light"></div></x-col>
</x-row>

:::

### 分栏间隔

> 分栏之间存在间隔：Row 组件 提供 gutter 属性来指定每一栏之间的间隔，默认间隔为 0

::: demo

<x-row :gutter="20">
  <x-col :span="6"><div class="grid-content bg-purple"></div></x-col>
  <x-col :span="6"><div class="grid-content bg-purple"></div></x-col>
  <x-col :span="6"><div class="grid-content bg-purple"></div></x-col>
  <x-col :span="6"><div class="grid-content bg-purple"></div></x-col>
</x-row>

:::

### 混合操作

> 通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局

::: demo
<x-row :gutter="20">
<x-col :span="16"><div class="grid-content bg-purple"></div></x-col>
<x-col :span="8"><div class="grid-content bg-purple"></div></x-col>
</x-row>
<x-row :gutter="20">
<x-col :span="8"><div class="grid-content bg-purple"></div></x-col>
<x-col :span="8"><div class="grid-content bg-purple"></div></x-col>
<x-col :span="4"><div class="grid-content bg-purple"></div></x-col>
<x-col :span="4"><div class="grid-content bg-purple"></div></x-col>
</x-row>
<x-row :gutter="20">
<x-col :span="4"><div class="grid-content bg-purple"></div></x-col>
<x-col :span="16"><div class="grid-content bg-purple"></div></x-col>
<x-col :span="4"><div class="grid-content bg-purple"></div></x-col>
</x-row>
:::

### 分栏偏移

> 支持偏移指定的栏数：通过制定 col 组件的 offset 属性可以指定分栏偏移的栏数，通过 push 可向右偏移一定栏数，pull 可向左偏移指定栏数

::: demo

<x-row :gutter="20">
  <x-col :span="6"><div class="grid-content bg-purple"></div></x-col>
  <x-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></x-col>
</x-row>
<x-row :gutter="20">
  <x-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></x-col>
  <x-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></x-col>
</x-row>
<x-row :gutter="20">
  <x-col :span="12" :offset="6"><div class="grid-content bg-purple"></div></x-col>
</x-row>
<x-row :gutter="20">
  <x-col :span="6"><div class="grid-content bg-purple"></div></x-col>
  <x-col :span="6" :push="6"><div class="grid-content bg-purple"></div></x-col>
</x-row>
<x-row :gutter="20">
  <x-col :span="6"><div class="grid-content bg-purple-light"></div></x-col>
  <x-col :span="12" :pull="4"><div class="grid-content bg-purple"></div></x-col>
</x-row>

:::

### 对齐方式

> 通过 flex 布局来对分栏进行灵活的对齐：将 type 属性赋值为 'flex'，可以启用 flex 布局，并可通过 justify 属性来指定 start, center, end, space-between, space-around 其中的值来定义子元素的横向排版方式，通过 align 属性指定 top，middle，bottom 其中的值来定义子元素纵向排版方式

::: demo

<x-row type="flex" class="row-bg">
  <x-col :span="6"><div class="grid-content bg-purple"></div></x-col>
  <x-col :span="6"><div class="grid-content bg-purple-light"></div></x-col>
  <x-col :span="6"><div class="grid-content bg-purple"></div></x-col>
</x-row>
<x-row type="flex" class="row-bg" justify="center">
  <x-col :span="6"><div class="grid-content bg-purple"></div></x-col>
  <x-col :span="6"><div class="grid-content bg-purple-light"></div></x-col>
  <x-col :span="6"><div class="grid-content bg-purple"></div></x-col>
</x-row>
<x-row type="flex" class="row-bg" justify="end">
  <x-col :span="6"><div class="grid-content bg-purple"></div></x-col>
  <x-col :span="6"><div class="grid-content bg-purple-light"></div></x-col>
  <x-col :span="6"><div class="grid-content bg-purple"></div></x-col>
</x-row>
<x-row type="flex" class="row-bg" justify="space-between">
  <x-col :span="6"><div class="grid-content bg-purple"></div></x-col>
  <x-col :span="6"><div class="grid-content bg-purple-light"></div></x-col>
  <x-col :span="6"><div class="grid-content bg-purple"></div></x-col>
</x-row>
<x-row type="flex" class="row-bg" justify="space-around">
  <x-col :span="6"><div class="grid-content bg-purple"></div></x-col>
  <x-col :span="6"><div class="grid-content bg-purple-light"></div></x-col>
  <x-col :span="6"><div class="grid-content bg-purple"></div></x-col>
</x-row>

<x-row type="flex" class="row-bg" align="top">
  <x-col :span="6"><div class="grid-content bg-purple"></div></x-col>
  <x-col :span="6"><div class="grid-content bg-purple-light" style="height: 100px;"></div></x-col>
  <x-col :span="6"><div class="grid-content bg-purple"></div></x-col>
</x-row>

<x-row type="flex" class="row-bg" align="middle">
  <x-col :span="6"><div class="grid-content bg-purple"></div></x-col>
  <x-col :span="6"><div class="grid-content bg-purple-light" style="height: 100px;"></div></x-col>
  <x-col :span="6"><div class="grid-content bg-purple"></div></x-col>
</x-row>

<x-row type="flex" class="row-bg" align="bottom">
  <x-col :span="6"><div class="grid-content bg-purple"></div></x-col>
  <x-col :span="6"><div class="grid-content bg-purple-light" style="height: 100px;"></div></x-col>
  <x-col :span="6"><div class="grid-content bg-purple"></div></x-col>
</x-row>

:::

### Row Attributes

| 参数    | 说明                                  | 类型   | 可选值                                      | 默认值 |
| ------- | ------------------------------------- | ------ | ------------------------------------------- | ------ |
| gutter  | 栅格间隔                              | number | —                                           | 0      |
| type    | 布局模式，可选 flex，现代浏览器下有效 | string | —                                           | —      |
| justify | flex 布局下的水平排列方式             | string | start/end/center/space-around/space-between | start  |
| align   | flex 布局下的垂直排列方式             | string | top/middle/bottom                           | top    |
| tag     | 自定义元素标签                        | string | \*                                          | div    |

### Col Attributes

| 参数   | 说明               | 类型   | 可选值 | 默认值 |
| ------ | ------------------ | ------ | ------ | ------ |
| span   | 栅格占据的列数     | number | —      | 24     |
| offset | 栅格左侧的间隔格数 | number | —      | 0      |
| push   | 栅格向右移动格数   | number | —      | 0      |
| pull   | 栅格向左移动格数   | number | —      | 0      |
| tag    | 自定义元素标签     | string | \*     | div    |
