<!--
 * @Date: 2023-11-10 09:28:41
 * @Auth: 873768511@qq.com
 * @LastEditors: 873768511@qq.com
 * @LastEditTime: 2023-11-14 10:37:39
 * @FilePath: \dc-component\docs\.vitepress\example\dOrganizationTree\dOrganizationTreeAsync.vue
-->
<template>
  <DOrganizationTree
    ref="treeRef"
    v-loading="loadingTree"
    :treeData="treeData"
    :highlightCurrent="true"
    :load="getLoadTree"
    @handSearch="handSearch"
  >
  </DOrganizationTree>
</template>

<script lang="ts" setup>
import { ref, onMounted} from 'vue'
import {vLoading} from 'element-plus'
import { DOrganizationTree } from 'dc-pro-component';

type Tree={
  label:string;
  id:string;
  children?:Tree[]|null;
  isLeaf?:boolean,
  key?:string,
  level?:number,
}
const treeData= ref<Tree[] >([],
 )
const getTree=(id:string='')=>{
  return new Promise<Tree[]>((resolve) => {
    setTimeout(() => {
      const data: Tree[] = [
      { label: `leaf${id}1`, id:id+'1', children:null },
      { label: `leaf${id}2`, id:id+'2', children:null },
      ]
      resolve(data)
    }, 500)
  })
}
const loadingTree = ref(false)
const handSearch=(text: string)=>{
  loadingTree.value = true
  if(!text){
    getTree('').then((res:Tree[])=>{
      treeData.value = res
      loadingTree.value = false
    })
  }else{
    const data: Tree[] = [{ label: `${text}`, id:'1', children:null }]
    loadingTree.value = false
    treeData.value = data
  }
}
const getLoadTree = (
  node:Tree,
  resolve:(data:Tree[])=>void
)=>{
  loadingTree.value = node.level===0
  getTree(node.level!==0?node.key:'').then((res:Tree[])=>{
    resolve(res)
    loadingTree.value = false
  })
}
</script>

<style>

</style>
