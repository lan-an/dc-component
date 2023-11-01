<!--
 * @Date: 2023-10-17 17:35:40
 * @Auth: 463997479@qq.com
 * @LastEditors: 463997479@qq.com
 * @LastEditTime: 2023-10-31 18:13:58
 * @FilePath: \dc-component\src\view\dTableSearch\index.vue
-->

<template>
  <d-table-search
    :columns="columns"
    :request="handleRequest"
    title="Card name"
    :header-cell-style="{
      background: '#f5f7fa',
    }"
    :pagination="{
      background: true,
      layout: 'total, sizes, prev, pager, next, jumper',
      small: 'small',
      pageSizes: [10, 200, 300, 400],
    }"
    :hasSearch="true"
    border
  >
    <template #dTableRight>
      <el-button type="primary" class="button">Operation button</el-button>
      <el-button class="button">...</el-button>
    </template>
    <template #searchData="{ search }">
      <el-space>
        <el-form-item prop="name" label="Activity name">
          <el-input v-model="search.name" />
        </el-form-item>
      </el-space>
    </template>

    <template #name="data">
      <div>{{ data.data.name }}</div>
    </template>
    <template #action="data">
      <el-button link type="primary">operation add</el-button>
      <el-button link type="warning">peration edit</el-button>
    </template>
  </d-table-search>
</template>

<script lang="ts" setup>
import { DTableSearch } from 'dc-pro-component';
import { ElButton, ElInput, ElSpace, ElFormItem } from 'element-plus';
import { onUnmounted } from 'vue';
import { h } from 'vue';
const columns = [
  {
    prop: 'name',

    label: 'name',
    slotName: 'name',
  },
  {
    prop: 'date',
    label: 'date',
  },
  {
    prop: 'address',
    label: 'address',
    // render: e => {
    //   console.log(e);
    //   return h(ElButton, { type: 'primary' });
    // },
  },
  {
    prop: '操作',
    label: '操作',
    slotName: 'action',
    width: 300,
  },
];
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
];
let timer = null;
const handleRequest = (params, done) => {
  //请求返回数据
  console.log(params);
  timer = setTimeout(() => {
    done({ data: tableData, total: 1000 });
  }, 2000);
};
onUnmounted(() => {
  clearTimeout(timer);
});
</script>
