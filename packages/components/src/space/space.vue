<!--
 * @Date: 2023-10-16 13:25:31
 * @Auth: 463997479@qq.com
 * @LastEditors: 463997479@qq.com
 * @LastEditTime: 2023-10-24 10:08:05
 * @FilePath: \dc-component\packages\components\src\space\space.vue
-->
<template>
  <el-space v-bind="{ ...$attrs }">
    <slot></slot>
  </el-space>
</template>

<script lang="ts" setup name="Dspace">
defineOptions({
  name: 'DcqcSpace'
})
import { ElSpace } from 'element-plus'
</script>
