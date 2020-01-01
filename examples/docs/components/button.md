## Button 按钮

常用的操作按钮

### 基础用法

> 基础的按钮用法。使用 `type`、`plain`、`round` 和 `circle` 属性来定义 `Button` 的样式。

::: demo

<p>
  <x-button>默认按钮</x-button>
  <x-button type="primary">主要按钮</x-button>
  <x-button type="success">成功按钮</x-button>
  <x-button type="info">信息按钮</x-button>
  <x-button type="warning">警告按钮</x-button>
  <x-button type="danger">危险按钮</x-button>
</p>

<p>
  <x-button plain >朴素按钮</x-button>
  <x-button plain type="primary">默认按钮</x-button>
  <x-button plain type="success">成功按钮</x-button>
  <x-button plain type="info">信息按钮</x-button>
  <x-button plain type="warning">警告按钮</x-button>
  <x-button plain type="danger">危险按钮</x-button>
</p>

<p>
  <x-button round >圆角按钮</x-button>
  <x-button round type="primary">默认按钮</x-button>
  <x-button round type="success">成功按钮</x-button>
  <x-button round type="info">信息按钮</x-button>
  <x-button round type="warning">警告按钮</x-button>
  <x-button round type="danger">危险按钮</x-button>
</p>

<p>
  <x-button icon="search" circle />
  <x-button icon="settings" type="primary" circle />
  <x-button icon="seleted" type="success" circle />
  <x-button icon="return" type="info" circle />
  <x-button icon="clock" type="warning" circle />
  <x-button icon="delete" type="danger" circle />
</p>

:::

### 禁用状态

> 按钮不可用状态

::: demo

<p>
  <x-button disabled >默认按钮</x-button>
  <x-button disabled type="primary">主要按钮</x-button>
  <x-button disabled type="success">成功按钮</x-button>
  <x-button disabled type="info">信息按钮</x-button>
  <x-button disabled type="warning">警告按钮</x-button>
  <x-button disabled type="danger">危险按钮</x-button>
</p>

<p>
  <x-button disabled plain >朴素按钮</x-button>
  <x-button disabled plain type="primary">默认按钮</x-button>
  <x-button disabled plain type="success">成功按钮</x-button>
  <x-button disabled plain type="info">信息按钮</x-button>
  <x-button disabled plain type="warning">警告按钮</x-button>
  <x-button disabled plain type="danger">危险按钮</x-button>
</p>
:::

### 文字按钮

> 没有边框和背景色的按钮

::: demo

<p>
  <x-button type="text">文字按钮</x-button>
  <x-button disabled type="text">文字按钮</x-button>
</p>
:::

### 图标按钮

> 带图标的按钮可增强辨识度（有文字）或节省空间（无文字）

::: demo

<p>
  <x-button icon="settings" type="primary"  />
  <x-button icon="add" type="primary"  />
  <x-button icon="data" type="primary"  />
  <x-button icon="search" type="primary"  />
  <x-button icon="search" type="primary">搜索</x-button>
  <x-button type="primary">
    搜索
    <x-icon name="search" />
  </x-button>
</p>
:::

### 加载中

> 点击按钮后进行数据加载操作，在按钮上显示加载状态

::: demo

<p>
  <x-button type="primary" :text="btn.text" :loading="btn.loading" @click="handleClick"  />
</p>

<script>
export default{
  data(){
    return {
      btn:{
        text:"点击",
      loading: false

      }
    }
  },
  methods:{
    handleClick(){
      this.btn.loading = true
      this.btn.text = '加载中'

      setTimeout(()=>{
        this.btn.loading = false
        this.btn.text = '点击'
      },3000)
    }
  }
}
</script>

:::

### 不同尺寸

> Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸

::: demo

<p>
  <x-button>默认按钮</x-button>
  <x-button size="medium">中等按钮</x-button>
  <x-button size="small">小型按钮</x-button>
  <x-button size="mini">超小型按钮</x-button>
</p>

<p>
  <x-button round>默认按钮</x-button>
  <x-button round size="medium">中等按钮</x-button>
  <x-button round size="small">小型按钮</x-button>
  <x-button round size="mini">超小型按钮</x-button>
</p>
:::

### Attributes

| 参数        | 说明           | 类型    | 可选值                                             | 默认值 |
| ----------- | -------------- | ------- | -------------------------------------------------- | ------ |
| size        | 尺寸           | string  | medium / small / mini                              | —      |
| type        | 类型           | string  | primary / success / warning / danger / info / text | —      |
| plain       | 是否朴素按钮   | -       | -                                                  | false  |
| round       | 是否圆角按钮   | boolean | -                                                  | —      | false |
| circle      | 是否圆形按钮   | boolean | -                                                  | false  |
| loading     | 是否加载中状态 | boolean | -                                                  | false  |
| disabled    | 是否禁用状态   | boolean | -                                                  | false  |
| icon        | 图标类名       | string  | -                                                  | -      |
| native-type | 原生 type 属性 | string  | button / submit / reset button                     | button |
