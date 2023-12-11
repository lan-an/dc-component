# DIntervalButton - 计时按钮

点击后按钮进入倒计时，不可点击状态。

## 基础用法

<script lang="ts" setup>
import { DIntervalButton } from 'dc-pro-component';
import { ref } from 'vue'
const timerbtn = ref(null)
const second = ref(5)
const sendCode = () => {
}
</script>

<d-interval-button type="primary" ref="timerbtn" :second="second" @click="sendCode" text="获取验证码" />

::: details Show Code

```vue
<template>
    <d-interval-button type="primary" ref="timerbtn" :second="second" @click="sendCode" text="获取验证码" />
</template>
<script lang="ts" setup>
import { DIntervalButton } from 'dc-pro-component';
import { ref } from 'vue'
const timerbtn = ref(null)
const second = ref(30)
const sendCode = () => {
}
</script>
```
:::

## DIntervalButton API

| 参数         | 说明                                     | 类型   | 可选值                  | 默认值     |
| ------------ | ---------------------------------------- | ------ | ----------------------- | ---------- |
| second    | 	倒计时最大值                                | number |                      | 60         |
| text      |   按钮文字                                    | string|                       | -          |