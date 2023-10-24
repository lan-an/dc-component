<!--
 * @Date: 2023-10-16 13:25:31
 * @Auth: 463997479@qq.com
 * @LastEditors: 463997479@qq.com
 * @LastEditTime: 2023-10-24 10:31:41
 * @FilePath: \dc-component\packages\components\src\button\button.vue
-->
<template>
  <el-button v-bind="{ ...$attrs }" @click="onClick('1')" type="primary"
    >Primary</el-button
  >
</template>

<script lang="ts" setup name="Dbutton">
defineOptions({
  name: 'DButton'
})
import { ElButton } from 'element-plus'
const onClick = param => {
  console.log(param)
}
</script>
