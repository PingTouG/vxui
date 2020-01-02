## Link 文字链接

> 文字超链接

### 基础用法

> 基础的文字链接用法

::: demo

<x-link>默认链接</x-link>
<x-link type="primary">默认链接</x-link>
<x-link type="success">默认链接</x-link>
<x-link type="warning">默认链接</x-link>
<x-link type="danger">默认链接</x-link>
<x-link type="info">默认链接</x-link>

:::

### 禁用状态

> 文字链接不可用状态

::: demo

<x-link disabled>默认链接</x-link>
<x-link disabled type="primary">默认链接</x-link>
<x-link disabled type="success">默认链接</x-link>
<x-link disabled type="warning">默认链接</x-link>
<x-link disabled type="danger">默认链接</x-link>
<x-link disabled type="info">默认链接</x-link>

:::

### 下划线

> 文字链接下划线

::: demo

<x-link :underline="false">无下划线</x-link>
<x-link>有下划线</x-link>

:::

### 图标

> 带图标的文字链接可增强辨识度

::: demo

<x-link icon="search">搜索</x-link>
<x-link>删除<x-icon name="delete" /></x-link>

:::

### Attributes

| 参数      | 说明             | 类型    | 可选值                                      | 默认值  |
| --------- | ---------------- | ------- | ------------------------------------------- | ------- |
| type      | 类型             | string  | primary / success / warning / danger / info | default |
| underline | 是否下划线       | boolean | —                                           | true    |
| disabled  | 是否禁用状态     | boolean | —                                           | false   |
| href      | 原生 href 属性   | string  | —                                           | -       |
| icon      | 图标类名         | string  | —                                           | -       |
| target    | 原生 target 属性 | string  | —                                           | -       |
