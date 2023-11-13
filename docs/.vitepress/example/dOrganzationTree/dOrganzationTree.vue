<!--
 * @Date: 2023-11-10 09:28:41
 * @Auth: 873768511@qq.com
 * @LastEditors: 873768511@qq.com
 * @LastEditTime: 2023-11-13 18:09:34
 * @FilePath: \dc-component\docs\.vitepress\example\dOrganzationTree\dOrganzationTree.vue
-->
<template>
  <ElRow style="height:100%">
    <ElCol :span="8">
      <DOrganizationTree
        :treeContainer="{width:'100%',height:'100%',padding: '20px',boxSizing:' border-box'}"
        ref="treeRef"
        v-bind="treeOption"
        :treeData="treeData"
        :highlightCurrent="true"
        empty-text="暂无数据"
      >
      </DOrganizationTree>
    </ElCol>
  </ElRow>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {ElRow,ElCol} from 'element-plus'
import { DOrganizationTree } from 'dc-pro-component';

type Tree={
  label:string;
  id:number|string;
  children?:Tree[];
}
type Tree1 = Partial<Tree>
const  treeOption=ref({
    isLazy:false,
    isAsyncSearch:false,
})
const treeData= ref<Tree1[] >([{
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