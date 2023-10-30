<!--
 * @Date: 2023-10-30 10:58:31
 * @Auth: 463997479@qq.com
 * @LastEditors: 463997479@qq.com
 * @LastEditTime: 2023-10-30 18:16:16
 * @FilePath: \dc-component\packages\components\src\dTableSearch\index.vue
-->
<template>
  <div class="d-content-table">
    <el-card class="box-card">
      <template v-if="hasSearch" #header>
        <div class="card-header">
          <el-form ref="ruleFormRef" :model="searchForm">
            <slot :searchForm="searchForm" name="searchData"></slot>
            <el-button type="primary" @click="handleSearch">查询</el-button>
            <el-button @click="handleReset(ruleFormRef)">重置</el-button>
          </el-form>
        </div>
      </template>

      <div class="d-content-table-body">
        <div class="d-content-table-action">
          <div class="d-table-left">
            <span v-if="title">{{ title }}</span>
          </div>
          <div class="d-table-right">
            <slot name="dTableRight"></slot>
          </div>
        </div>
        <el-table v-bind="{ ...$attrs }" :data="tableData" style="width: 100%">
          <el-table-column
            v-for="(item, index) in columArr"
            v-bind="{ ...item }"
            :key="index"
          ></el-table-column>
        </el-table>
        <div class="d-table-footer">
          <el-pagination v-bind="{ ...pagination }" />
        </div>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts" name="DTableSearch" setup>
import type { ColumProps } from '@/components';
import type { FormInstance } from 'element-plus';

import {
  ElPagination,
  ElButton,
  ElCard,
  ElTable,
  ElTableColumn,
  ElForm,
  ElFormItem,
} from 'element-plus';

import { onMounted, ref } from 'vue';

defineOptions({
  name: 'DTableSearch',
});

// const emits = defineEmits(['request'])
let columArr: any[] = [];
const tableData = ref([]);
//查询条件
const searchForm = ref({});
const ruleFormRef = ref<FormInstance>();
const { request, hasPage, columns, pagination } = withDefaults(
  defineProps<{
    columns?: ColumProps[];
    request: (params: any, done: (data: any[]) => void) => void;
    title?: string;
    pagination?: any; //分页所有参数
    hasSearch?: boolean; //是否需要搜索
    hasPage?: boolean;
  }>(),
  {
    hasSearch: false,
    hasPage: true,
  },
);
//搜索
const handleSearch = () => {
  handleMethod();
};
//重置
const handleReset = (formEl: FormInstance | undefined) => {
  if (hasPage) {
    searchForm.value = {
      ...searchForm.value,
      pageNum: 10,
      pageSize: 1,
    };
  }
  if (!formEl) return;
  formEl.resetFields();
  console.log(searchForm.value);
  handleMethod();
};
//异步函数返回

const handleMethod = (): void => {
  request({ ...searchForm.value }, data => {
    tableData.value = data;
  });
};

//循环处理colum中数据格式
const handleResetColum = (): void => {
  columArr = [];
  for (let key of columns) {
    let obj = {};

    for (let k in key as any) {
      obj[k] = key[k];
    }
    columArr.push(obj);
  }
  console.log(columArr);
};
onMounted(() => {
  handleResetColum();
  handleMethod();
});
</script>
<style>
.d-content-table {
  width: 100%;
  height: 100%;
}
.d-content-table-action {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 20px 0;
}

.d-table-footer {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 20px 0;
}
</style>
