<!--
 * @Date: 2023-10-30 10:58:31
 * @Auth: 463997479@qq.com
 * @LastEditors: 463997479@qq.com
 * @LastEditTime: 2023-10-31 17:37:22
 * @FilePath: \dc-component\packages\components\src\dTableSearch\index.vue
-->
<template>
  <div class="d-content-table">
    <el-card class="box-card">
      <!-- 搜索 -->
      <template v-if="hasSearch" #header>
        <div class="card-header">
          <el-form ref="ruleFormRef" :model="searchForm">
            <slot :search="searchForm" name="searchData"></slot>
            <el-button :loading="loading" type="primary" @click="handleSearch"
              >查询</el-button
            >
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
            <el-button @click="handleSearch" :icon="Refresh"></el-button>
          </div>
        </div>

        <el-table v-bind="{ ...$attrs }" :data="tableData" style="width: 100%">
          <el-table-column
            v-for="(item, index) in columArr"
            v-bind="{ ...item }"
            :key="index"
          >
            <template v-if="item.slotName" #default="scope">
              <slot
                :name="item.slotName"
                :data="{ ...scope.row, index: scope.$index }"
              ></slot>
            </template>
            <!-- <template #default="scope">
              {{ item.render && item.render(scope) }}
            </template> -->
          </el-table-column>
        </el-table>
        <!-- 分页 -->
        <div class="d-table-footer">
          <d-page
            @handleCurrentChange="handleCurrentChange"
            @handleSizeChange="handleSizeChange"
            :pagination="{
              ...pagination,
              total: page.total ? page.total : 100,
            }"
          />
        </div>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts" name="DTableSearch" setup>
import type { ColumProps } from '@/components';
import type { FormInstance } from 'element-plus';
import DPage from './footer.vue';

import { Refresh } from '@element-plus/icons-vue';
import {
  ElButton,
  ElCard,
  ElTable,
  ElTableColumn,
  ElForm,
  ElFormItem,
  ElInput,
} from 'element-plus';

import { onMounted, reactive, ref } from 'vue';

defineOptions({
  name: 'DTableSearch',
});

// const emits = defineEmits(['request'])
let columArr: any[] = [];
const tableData = ref([]);
//查询条件

let searchForm = reactive({});
const loading = ref(false);
const page = reactive({
  pageNum: 10,
  pageSize: 1,
  total: 6,
});
const ruleFormRef = ref<FormInstance>();
const { request, hasPage, columns, pagination } = withDefaults(
  defineProps<{
    columns?: ColumProps[];
    request: (
      params: any,
      done: (res: {
        data: any[];
        total?: number;
        pageNum?: number;
        pageSize?: number;
      }) => void,
    ) => void;
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
  handleRequest();
};

//重置
const handleReset = (formEl: FormInstance | undefined) => {
  if (hasPage) {
    page.pageNum = 10;
  }
  if (!formEl) return;
  formEl.resetFields();
  handleRequest();
};
//分页

const handleCurrentChange = (val: number) => {
  page.pageNum = val;
  handleRequest();
};

const handleSizeChange = (val: number) => {
  page.pageSize = val;
  handleRequest();
};

//异步函数返回
const handleRequest = (): void => {
  let params = {
    ...searchForm,
  };
  if (hasPage) {
    params = {
      ...searchForm,
      pageNum: page.pageNum,
      pageSize: page.pageSize,
    };
  }
  loading.value = true;
  request({ ...params }, res => {
    if (res) {
      if (hasPage) {
        tableData.value = res.data;
        page.total = res.total;
      } else {
        tableData.value = res.data;
      }
      loading.value = false;
    }
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
};
onMounted(() => {
  handleResetColum();
  handleRequest();
});
</script>
<style scoped>
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
