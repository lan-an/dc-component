<!--
 * @Date: 2023-10-16 13:25:31
 * @Auth: 463997479@qq.com
 * @LastEditors: 463997479@qq.com
 * @LastEditTime: 2023-10-17 15:23:06
 * @FilePath: \dcqc-component\packages\components\src\button\button.vue
-->
<template>
  <Space v-bind="{...$atter}">
    <slot></slot>
  </Space>
</template>

<script setup name="Dspace">
defineOptions({
        name: 'DcqcSpace'
    })
import { Space } from "ant-design-vue";

</script>
