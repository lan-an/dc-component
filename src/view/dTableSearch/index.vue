<!--
 * @Date: 2023-10-17 17:35:40
 * @Auth: 463997479@qq.com
 * @LastEditors: 463997479@qq.com
 * @LastEditTime: 2023-11-03 18:24:34
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
      pageSizes: [10, 20, 200, 300, 400],
      pageSize: 20,
    }"
    empty-text="暂无数据"
    border
  >
    <template #dTableRight>
      <el-button type="primary" class="button">Operation button</el-button>
      <el-button class="button">...</el-button>
    </template>
    <template #searchData="{ search }">
      <el-form-item prop="name" label="名称">
        <el-input v-model="search.name" />
      </el-form-item>
      <el-form-item prop="name" label="状态">
        <el-input v-model="search.name" />
      </el-form-item>
    </template>

    <template #fold="{ search }">
      <el-form-item prop="name" label="Activity name">
        <el-input v-model="search.name" />
      </el-form-item>
      <el-form-item prop="name" label="Activity name">
        <el-input v-model="search.name" />
      </el-form-item>
    </template>
    <template #name="data">
      <div>{{ data.data.name }}</div>
    </template>
    <template #empty>
      <el-empty :image-size="100" />
    </template>
    <template #action="data">
      <el-button link type="primary">operation add</el-button>
      <el-button link type="warning">peration edit</el-button>
    </template>
  </d-table-search>
</template>

<script lang="ts" setup>
import { DTableSearch } from 'dc-pro-component';
import { ElButton, ElInput, ElSpace, ElFormItem, ElEmpty } from 'element-plus';
import { onUnmounted } from 'vue';
import { h } from 'vue';
const filterHandler = (value, row, column) => {
  const property = column['property'];
  return row[property] === value;
};
const columns = [
  {
    prop: 'name',

    label: 'name',
    slotName: 'name',
  },
  {
    prop: 'date',
    label: 'date',
    columnKey: 'date',
    filters: [
      { text: '2016-05-01', value: '2016-05-01' },
      { text: '2016-05-02', value: '2016-05-02' },
      { text: '2016-05-03', value: '2016-05-03' },
      { text: '2016-05-04', value: '2016-05-04' },
    ],
    sortable: true,

    filterMethod: filterHandler,
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
