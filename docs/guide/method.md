<!--
 * @Date: 2023-10-18 13:01:07
 * @Auth: 463997479@qq.com
 * @LastEditors: 463997479@qq.com
 * @LastEditTime: 2023-11-10 17:25:27
 * @FilePath: \dc-component\docs\guide\method.md
-->

# 快速上手

## 安装

使用命令安装
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

import * as dc from 'dc-pro-component' 
import 'dc-pro-component/lib/style.css' 
const app = createApp(App) 
app.use(dc).mount('#app') 
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
## 报错及解决方式
::: warning



`config文件中`如果安装完成之后控制台报错`Uncaught TypeError:Cannot read properties of null (reading 'isCE')`在配置文件中
```js
 resolve: {
	  dedupe: [
	    'vue'
	  ]
},
   		

```
:::
::: warning

在`webpack`中控制台报错`Uncaught TypeError:Cannot read properties of null (reading 'isCE')`
```js
const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  configureWebpack: {
    resolve: {
      symlinks: false,
      alias: {
        vue: path.resolve("./node_modules/vue"),
      },
    },
  },
  // ...
});
```
:::