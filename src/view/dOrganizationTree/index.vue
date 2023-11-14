<!--
 * @Date: 2023-11-06 10:07:11
 * @Auth: 873768511@qq.com
 * @LastEditors: 873768511@qq.com
 * @LastEditTime: 2023-11-13 18:17:04
 * @FilePath: \dc-component\src\view\dOrganizationTree\index.vue
-->
<template>
  <ElRow style="height:100%">
    <ElCol :span="8">
      <OrganizationTree
        :treeContainer="{width:'100%',height:'100%',padding: '20px',boxSizing:' border-box'}"
        ref="treeRef"
        :treeData="treeData"
        :highlightCurrent="true"
        v-bind="treeOption"
        v-loading="loadingTree"
        empty-text="暂无数据"
        nodeKey="id"
        :props="defaultProps"
        @nodeClick="nodeClick"
        @handSearch="handSearch"
        :load="getLoadTree"
      >
      </OrganizationTree>
    </ElCol>
    <ElCol :span="16">
      <div v-loading="loading" style="width:100%;text-align:center;line-height:300px;"></div>
    </ElCol>
  </ElRow>
</template>

<script lang="ts" setup>
import { ref, toRef, watch } from 'vue'
import {ElRow,vLoading,ElCol,ElIcon} from 'element-plus'
import { DOrganizationTree } from 'dc-pro-component';
import {DArrowRight,Edit} from '@element-plus/icons-vue'
import { reactive } from 'vue';
import axios from 'axios';

type Tree={
  label:string;
  id:number|string;
  children?:Tree[];
  code?:string,
  disabled?:boolean,
  isLeaf?:boolean,
  // ykzId?:string,
  key?:'string',
  level?:number,
}
type Tree1 = Partial<Tree>
const defaultProps={
  // id:'ykzId',
  // label:'govShortName',
  id:'id',
  label:'label',
}
const  treeOption=ref({
    isAsyncSearch:true,
    ellipsisLimit: true,
    isLazy:true,
    checkStrictly:true,
    isShowCheckbox:true
})
const treeData= ref<Tree1[] >([{
    id: 2,
    label: '市委',
    code: 'GO_f6dcdfa87d1e4eadb0e33d2a2d7c6333',
    children: null,

  },{
    id: 3,
    label: "市人大市人大市人大市人大市人大市人大",
    code: "GO_acbaf8c3ee0642f19592cf73bf4cc016",
    children: [{
      id: 4,
      label: "子节点",
      code: "GO_acbaf8c3ee0642f19592cf73bf4cc017",
      }]
  }],
 )
// 懒加载方法
/**
 * 
 * @param id 
 */
 const getTree=(id:string)=>{
  return new Promise<Tree[]>((resolve) => {
    // request('/summarizeOrganziation/queryOrgListByParentId',{params:{parentId:id?id:''}},'get').then((res:any) => {
    //   resolve(res.data)
    // });
    setTimeout(() => {
      const data: Tree[] = [
      { label: `leaf${id}1`, id:id+'1', children:null },
      { label: `leaf${id}2`, id:id+'2', children:null, disabled:true },
      ]
      resolve(data)
    }, 500)
  })
}
const loadingTree = ref(false)
/**
 * 
 * @param text 搜索条件
 * @param callback 搜索异步回调
 */
const handSearch=(text: string , callback)=>{
  loadingTree.value = true
  if(!text){
    getTree('').then((res:Tree[])=>{
      treeData.value = res
      loadingTree.value = false
    })
  }else{
    // request('/summarizeOrganziation/queryOrgListByNamePage',{params:{govName:text,pageSize: 100,pageNum: 1}},'get',).then((res:any) => {
    //   loadingTree.value = false
    //   treeData.value = res.data.list
    // })
    const data: Tree[] = [{ label: `${text}`, id:1, children:null }]
    loadingTree.value = false
    treeData.value = data
  }
}
// 刷新loading
let loading = ref(false)
const handleRequest = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    }, 2000);
};
/**
 * 
 * @param data 点击当前树节点信息
 */
const nodeClick = (data:Tree)=>{
  console.log(data.id)
  handleRequest()
}
/**
 * 
 * @param node 当前点击的节点
 * @param resolve 为数据加载完成的回调(必须调用)
 */
const getLoadTree = (
  node:Tree,
  resolve:(data:Tree[])=>void
)=>{
  // request('/summarizeOrganziation/queryOrgListByParentId',{params:{parentId:node.level!==0?node.key:''}},'get').then((res:any) => {
  //     resolve(res.data)
  //   });
  loadingTree.value = node.level===0
  getTree(node.level!==0?node.key:'').then((res:Tree[])=>{
    resolve(res)
    loadingTree.value = false
  })
}
</script>

<style>

</style>