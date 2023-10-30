<!--
 * @Date: 2023-10-17 17:35:40
 * @Auth: 463997479@qq.com
 * @LastEditors: 463997479@qq.com
 * @LastEditTime: 2023-10-30 17:31:20
 * @FilePath: \dc-component\src\app.vue
-->

<template>
  <d-table-search
    :columns="columns"
    :request="handleRequest"
    :data="tableData"
    title="Card name"
    :pagination="{
      background: true,
      layout: 'prev, pager, next',

      total: 1000,
      small: 'small',
    }"
    :hasSearch="true"
    border
  >
    <template #dTableRight>
      <el-button type="primary" class="button">Operation button</el-button>
      <el-button class="button">...</el-button>
    </template>
    <template #searchData="{ searchForm }">
      <el-space>
        <el-form-item label="Activity name">
          <el-input v-model="searchForm.name" />
        </el-form-item>
      </el-space>
    </template>
  </d-table-search>
</template>

<script lang="ts" setup>
import { DTableSearch } from 'dc-pro-component';
import { ElButton, ElInput, ElSpace, ElTableColumn } from 'element-plus';

const columns = [
  {
    prop: 'name',
    label: 'name',
    width: '300',
  },
  {
    prop: 'date',
    label: 'date',
    width: '300',
  },
  {
    prop: 'address',
    label: 'address',
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

const handleRequest = (params, done) => {
  console.log(params);

  //请求返回数据
  done(tableData);
};
</script>
