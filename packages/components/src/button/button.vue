<!--
 * @Date: 2023-10-16 13:25:31
 * @Auth: 463997479@qq.com
 * @LastEditors: 463997479@qq.com
 * @LastEditTime: 2023-10-20 15:49:52
 * @FilePath: \dc-component\packages\components\src\button\button.vue
-->
<template>
  <Button v-bind="{ ...$attrs }" @click="onClick('1')">Primary Button</Button>
</template>

<script lang="ts" setup name="Dbutton">
defineOptions({
  name: 'DButton'
})

import { Button } from 'ant-design-vue'
const onClick = param => {
  console.log(param)
}
</script>
