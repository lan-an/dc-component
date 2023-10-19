<!--
 * @Date: 2023-10-18 13:01:07
 * @Auth: 463997479@qq.com
 * @LastEditors: 463997479@qq.com
 * @LastEditTime: 2023-10-18 15:36:29
 * @FilePath: \dc-component\docs\guide\method.md
-->

# 快速上手

## 安装

使用命令
::: code-group

```shell [pnpm]
pnpm install dc-pro-component

```

```shell [npm]
npm install dc-pro-component --save
```

:::

## 全局注册

> App.vue

```js
import { createApp } from 'vue'
import App from './app.vue'

import * as dc from 'dc-pro-component' // [!code  hl]
const app = createApp(App) // [!code  focus]
app.use(dc).mount('#app') // [!code  hl]
```

```vue
<template>
  <d-button />
</template>

<script setup></script>
```

## 按需引入

> button.vue

```vue
<template>
  <Button>按钮</Button>
</template>

<script setup>
import { Button } from 'dc-pro-component'
</script>
```
