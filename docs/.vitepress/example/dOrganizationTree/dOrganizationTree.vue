<!--
 * @Date: 2023-11-10 09:28:41
 * @Auth: 873768511@qq.com
 * @LastEditors: 873768511@qq.com
 * @LastEditTime: 2023-11-14 10:37:16
 * @FilePath: \dc-component\docs\.vitepress\example\dOrganizationTree\dOrganizationTree.vue
-->
<template>
  <DOrganizationTree
    ref="treeRef"
    v-bind="treeOption"
    :treeData="treeData"
    :ellipsisLimit="10"
  >
  </DOrganizationTree>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { DOrganizationTree } from 'dc-pro-component';

type Tree={
  label:string;
  id:number;
  children?:Tree[];
}
const  treeOption=ref({
    isLazy:false,
    isAsyncSearch:false
})
const treeData= ref<Tree[]>([{
    id: 2,
    label: '市委',
    children: [],

  },{
    id: 3,
    label: "市人大市人大市人大市人大市人大市人大",
    children: [{
      id: 4,
      label: "子节点",
      }]
  }],
 )
</script>

<style>

</style>
