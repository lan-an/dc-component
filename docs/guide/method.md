# 快速上手

## 安装

使用命令

```shell
pnpm install dcqc

```

## 全局注册

> App.vue

```js
import { createApp } from "vue";
import App from "./app.vue";
import * as dcqc from "dcqc";
const app = createApp(App);
app.use(dcqc).mount("#app");
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
import { Button } from "dcqc";
</script>
```
