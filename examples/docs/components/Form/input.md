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
  <x-input placeholder="请输入内容" v-model="value"/>
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
