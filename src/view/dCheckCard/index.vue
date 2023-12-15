<template>
  <div class="container">
    <DCheckCard class="item" v-for="item in list" :checked="item.checked" :title="item.title" :content="item.content" @changeCheck="changeCheck"/>
  </div>
</template>

<script setup>
import { DCheckCard } from 'dc-pro-component';
import {ref} from 'vue'
const changeCheck = (val) => {
  console.log(val, 'changeCheck');
};
const list = ref([
  {
    title: '卡片1',
    content: '卡片1的内容',
    checked: true,
  },
  {
    title: '卡片2',
    content: '卡片2的内容卡片2的内容卡片2的内容卡片2的内容卡片2的内容卡片2的内容卡片2的内容卡片2的内容卡片2的内容卡片2的内容卡片2的内容卡片2的内容卡片2的内容卡片2的内容卡片2的内容卡片2的内容卡片2的内容卡片2的内容卡片2的内容卡片2的内容卡片2的内容卡片2的内容',
    checked: false,
  },
  {
    title: '卡片3',
    content: '卡片3的内容',
    checked: false,
  },
  {
    title: '卡片4',
    content: '卡片4的内容',
    checked: false,
  },
  {
    title: '卡片5',
    content: '卡片5的内容',
    checked: false,
  },

])
</script>

<style scoped>
.container{
  display: flex;

}
.item{
  margin-right: 10px;
}
</style>