<!--
 * @Date: 2023-11-15 14:44:37
 * @Author: liu-hongrui
 * @LastEditors: liu-hongrui
 * @LastEditTime: 2023-11-15 16:53:02
 * @FilePath: \dc-component\src\view\dCheckFilter\index.vue
-->
<template>
  <div v-for="item in list">
    <d-check-filter :checkList="item.children" :title="item.title" @sendCheck="sendCheck" />
  </div>
  <DTags :tagsList="tagsList" tageTitle="选中" closable/>
</template>

<script setup lang="ts">
import { DCheckFilter,DTags } from 'dc-pro-component';
import { ref } from "vue";
const list = ref([
  {
    title: "标题一",
    children: [
      {value:'1-1',label:'标题 1-1'},
      {value:'1-2',label:'标题 1-2'},
      {value:'1-3',label:'标题 1-3'},
      {value:'1-4',label:'标题 1-4'},
    ],
  },
  {
    title: "标题二",
    children: [
      {value:'2-1',label:'标题 2-1'},
      {value:'2-2',label:'标题 2-2'},
      {value:'2-3',label:'标题 2-3'},
    ],
  },
]);
const tagsList = ref([])
const sendCheck = (currentList:any,checkTags:any[]) => {
  console.log(currentList,'当前标题选中的数据');
  console.log(checkTags,'所有选中的数据');
  tagsList.value = checkTags
}
</script>

<style scoped>
</style>