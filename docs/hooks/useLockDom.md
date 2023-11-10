<!--
 * @Date: 2023-10-18 13:01:07
 * @Auth: 463997479@qq.com
 * @LastEditors: 463997479@qq.com
 * @LastEditTime: 2023-11-10 10:04:25
 * @FilePath: \dc-component\docs\hooks\useLockDom.md
-->

# useLockDom 关闭滚动条


## 基础用法
`useLockDom` 提供了一个 `state` 参数，当它的值变化后，关闭显示当前页面的滚动条。

::: tip
点击按钮控制页面的滚动条显示隐藏
:::


  <d-button @click="handleClick"  type="primary" block></d-button>

{{!flag?'关闭':'打开'}}
<script lang="ts" setup>
  import { useLockDom } from 'dc-hooks';
  import {ref } from 'vue';
  const flag = ref(false)
    const handleClick=()=>{
      flag.value=!flag.value;
      useLockDom(flag.value);
    }
</script>




::: details Show Code
```vue
<script>
import { useLockDom } from 'dc-hooks';
  import {ref } from 'vue';
  const flag = ref(false)
    const handleClick=()=>{
      flag.value=!flag.value;
      useLockDom(flag.value);
    }
</script>
```

:::

## Attributes

| 参数          | 说明 | 类型   | 可选值                                           | 默认值  |
| ---- | ---- | ------ | ------------------------------------------------ | ------- |
| state | 状态 | boolean | false                           | false |


