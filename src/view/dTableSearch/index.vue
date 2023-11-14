<!--
 * @Date: 2023-10-17 17:35:40
 * @Auth: 463997479@qq.com
 * @LastEditors: 463997479@qq.com
 * @LastEditTime: 2023-11-14 17:17:58
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
      pageNum: 1,
    }"
    :tableProp="{}"
    empty-text="暂无数据"
    border
    :cardProp="{ shadow: 'always' }"
    more
  >
    <template #dTableRight>
      <el-button type="primary" class="button">Operation button</el-button>
      <el-button class="button">...</el-button>
    </template>
   
    
    
    <template #name="data">
      <div>{{ data.data.name }}</div>
    </template>
    <template #empty>
      <el-empty :image-size="100" />
    </template>
    <template #action="data">
      <el-button @click="handleClickDom" link type="primary"
        >operation add</el-button
      >
      <el-button link type="warning">peration edit</el-button>
    </template>
  </d-table-search>
</template>

<script lang="ts" setup>
import { DTableSearch } from 'dc-pro-component';
import { ElButton, ElInput, ElSpace, ElFormItem, ElEmpty,ElSelect } from 'element-plus';
import { onUnmounted, ref } from 'vue';
import { useLockDom } from 'dc-hooks';
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
    search:false,
  
  },
  {

    label: 'name',
    slotName: 'name',
    valueType: 'ElInput',
    search:true,
    defaultValue:'',
    hideInTable: true,
    key:'_name',
    fieldProps: {
     
      placeholder: '请输入用户名',

    },
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
    valueType: 'ElDatePicker',
    search:true,
    fieldProps: {
      placeholder: '请输入用户名',
      // labelWidth: '100.0px',
      format:"YYYY-MM-DD",
        valueFormat:"YYYY-MM-DD",
        type:"date",
    }
  },
  {
    prop: 'address',
    label: 'address',
    valueType: 'ElSelect',
    search:true,
    fieldProps: {
      placeholder: '请输入用户名',
        option:[
        {
          label:'a',
          value:'a'
        }
        ]

    }
    
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

const flag = ref<boolean>(false);
const handleClickDom = () => {
  flag.value = !flag.value;
  useLockDom(flag.value);
};
onUnmounted(() => {
  clearTimeout(timer);
});
</script>
