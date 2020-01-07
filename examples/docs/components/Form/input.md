## Input 输入框

> 通过鼠标或键盘输入字符

::: demo

文档此页面全局样式

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
