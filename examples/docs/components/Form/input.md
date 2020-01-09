## Input 输入框

> 通过鼠标或键盘输入字符

::: demo

此文档页面的全局样式

<style>
.x-demo{
  width: 180px;
}
</style>

:::

### 基础用法

::: demo

<p class="x-demo">
  <x-input placeholder="请输入内容" v-model="value" />
  <div>输入内容：{{value}}</div>
</p>

<script>
export default {
  data(){
    return {
      value:''
    }
  }
}
</script>

:::

### 禁用状态

> 通过`disabled`属性指定是否禁用 input 组件

::: demo

<p class="x-demo">
  <x-input placeholder="请输入内容" disabled />
</p>
  
:::

### 可清空

> 使用`clearable`属性即可得到一个可清空的输入框

::: demo

<p class="x-demo">
  <x-input placeholder="请输入内容" clearable />
</p>
  
:::

### 密码框

> 当`type`使用`show-password`属性即可得到一个可切换显示隐藏的密码框

::: demo

<p class="x-demo">
  <x-input type="password" placeholder="请输入内容" show-password clearable />
</p>

:::

### 带`icon`的输入框

> 带有图标标记输入类型

::: demo

<p class="x-demo">
  <x-input placeholder="请输入内容" prefix-icon="search" />
</p>

<p class="x-demo">
  <x-input placeholder="请输入内容" suffix-icon="clock" />
</p>

:::

### 文本域

::: demo

<x-input type="textarea" placeholder="请输入内容" />

:::

### 输入长度限制

> `maxlength` 和 `minlength` 是原生属性，用来限制输入框的字符长度，其中字符长度是用`Javascript`的字符串长度统计的。对于类型为`text`或`textarea`的输入框，在使用`maxlength`属性限制最大输入长度的同时，可通过设置`show-word-limit`属性来展示字数统计

::: demo

<p class="x-demo">
  <x-input placeholder="请输入内容" :maxlength="100" show-word-limit/>
</p>

<p>
  <x-input type="textarea" placeholder="请输入内容" :maxlength="100" show-word-limit/>
</p>

:::

### 尺寸

> 可通过`size`属性指定输入框的尺寸，除了默认的大小外，还提供了`medium`、`small`和`mini`三种尺寸。

::: demo

<p>
  <x-row :gutter="20">
    <x-col :span="6"><x-input placeholder="请输入内容" /></x-col>
    <x-col :span="6"><x-input placeholder="请输入内容" size="medium"/></x-col>
    <x-col :span="6"><x-input placeholder="请输入内容" size="small"/></x-col>
    <x-col :span="6"><x-input placeholder="请输入内容" size="mini"/></x-col>
  </x-row>
</p>

:::

### Input Attributes

| 参数            | 说明                                     | 类型            | 可选值                                          | 默认值 |
| --------------- | ---------------------------------------- | --------------- | ----------------------------------------------- | ------ |
| type            | 类型                                     | string          | `text`,`textarea` 和其他`原生 input 的 type 值` | text   |
| value / v-model | 绑定值                                   | string / number | —                                               | —      |
| maxlength       | 原生属性，最大输入长度                   | number          | —                                               | —      |
| minlength       | 原生属性，最大输入长度                   | number          | —                                               | —      |
| minlength       | 原生属性，最大输入长度                   | number          | —                                               | —      |
| show-word-limit | 原生属性，最大输入长度                   | number          | —                                               | —      |
| placeholder     | 输入框占位文本                           | string          | —                                               | —      |
| clearable       | 是否可清空                               | boolean         | —                                               | false  |
| show-password   | 是否显示切换密码图标                     | boolean         | —                                               | false  |
| disabled        | 禁用                                     | boolean         | —                                               | false  |
| size            | 输入框尺寸，只在`type!="textarea"`时有效 | string          | medium / small / mini                           | —      |
| prefix-icon     | 输入框头部图标                           | string          | —                                               | —      |
| suffix-icon     | 输入框尾部图标                           | string          | —                                               | —      |
| rows            | 输入框行数，只对`type="textarea"`有效    | number          | —                                               | 3      |
| autocomplete    | 原生属性，自动补全                       | string          | on, off                                         | off    |
| name            | 原生属性                                 | string          | —                                               | —      |
| readonly        | 原生属性，是否只读                       | boolean         | —                                               | false  |
| max             | 原生属性，设置最大值                     | —               | —                                               | —      |
| min             | 原生属性，设置最小值                     | —               | —                                               | —      |
| step            | 原生属性，设置输入字段的合法数字间隔     | —               | —                                               | —      |
| autofocus       | 原生属性，自动获取焦点                   | boolean         | true, false                                     | false  |
| form            | 原生属性                                 | string          | —                                               | —      |

### Input Events

| 事件名称 | 说明                                        | 回调参数       |
| -------- | ------------------------------------------- | -------------- |
| blur     | 在`Input`失去焦点时触发                     | (event: Event) |
| focus    | 在`Input`获得焦点时触发----                 | (event: Event) |
| change   | 仅在输入框失去焦点或用户按下回车时触发      | (value: string | number) |
| input    | 在`Input`值改变时触发                       | --------       |
| clear    | 在点击由`clearable`属性生成的清空按钮时触发 | —              |
