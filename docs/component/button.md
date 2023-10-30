<!--
 * @Date: 2023-10-18 13:01:07
 * @Auth: 463997479@qq.com
 * @LastEditors: 463997479@qq.com
 * @LastEditTime: 2023-10-24 14:04:49
 * @FilePath: \dc-component\docs\component\button.md
-->

# Button 按钮

按钮用于开始一个即时操作。

## 基础用法

基础的按钮用法。

<dcqc-space >
  <d-button type="primary" block>Primary</d-button>
  <d-button type="success">成功按钮</d-button>
  <d-button type="info">信息按钮</d-button>
  <d-button type="warning">警告按钮</d-button>
  <d-button type="danger">危险按钮</d-button>
  </dcqc-space>

::: details Show Code

```vue
<template>
  <d-button>默认按钮</d-button>
  <d-button type="primary">主要按钮</d-button>
  <d-button type="success">成功按钮</d-button>
  <d-button type="info">信息按钮</d-button>
  <d-button type="warning">警告按钮</d-button>
  <d-button type="danger">危险按钮</d-button>
</template>
```

:::

## 不同尺寸

提供三种不同尺寸的按钮。

<dcqc-space>
  <d-button size="small">主要按钮</d-button>
  <d-button>默认按钮</d-button>
  <d-button size="large">成功按钮</d-button>
</dcqc-space>

::: details Show Code

```vue
<template>
  <d-button>默认按钮</d-button>
  <d-button size="small">主要按钮</d-button>
  <d-button size="large">成功按钮</d-button>
</template>
```

:::

## Attributes

| 参数 | 说明 | 类型   | 可选值                                           | 默认值  |
| ---- | ---- | ------ | ------------------------------------------------ | ------- |
| size | 尺寸 | string | large / small / mini                             | default |
| type | 类型 | string | primary / ghost / dashed / link / text / default | primary |
