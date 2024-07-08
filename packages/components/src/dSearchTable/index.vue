<!--
 * @Date: 2023-10-30 10:58:31
 * @Auth: 463997479@qq.com
 * @LastEditors: 463997479@qq.com
 * @LastEditTime: 2024-02-20 17:43:45
 * @FilePath: \ztc-web\src\views\map\tableList.vue
-->

<template>
  <div class="d-content-table">
    <el-card v-bind="{ ...cardProp }" class="box-card">
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
        <div v-if="showResearch" class="d-content-table-action">
          <div class="d-table-left">
            <span v-if="title">{{ title }}</span>
          </div>
          <div class="d-table-right">
            <slot :data="searchForm" name="dTableRight"></slot>
            <el-button @click="handleSearch" :icon="Refresh"></el-button>
          </div>
        </div>

        <el-table
          v-loading="loading"
          v-bind="{ ...$attrs }"
          :data="tableData"
          style="width: 100%"
          @filter-change="filterChange"
          ref="tableRef"
        >
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
          </el-table-column>
        </el-table>
        <!-- 分页 -->
        <div class="d-table-footer">
          <d-page
            v-if="hasPage && page.total"
            @handleCurrentChange="handleCurrentChange"
            @handleSizeChange="handleSizeChange"
            :pagination="{
              ...pagination,
              total: page.total,
            }"
          />
        </div>
      </div>
    </el-card>
  </div>
</template>

<script name="DSearchTable" setup>
import DPage from './footer.vue';

import { Refresh } from '@element-plus/icons-vue';

import { onMounted, reactive, ref } from 'vue';

defineOptions({
  name: 'DSearchTable',
});

const emits = defineEmits(['handleReset', 'filterChange']);
let columArr = [];
const tableData = ref([]);
//查询条件

let searchForm = reactive({});
const loading = ref(false);
const page = reactive({
  pageNum: 1,
  pageSize: 10,
});
const tableRef = ref();
const ruleFormRef = ref();
const {
  request,
  hasPage,
  columns,
  pagination,
  handleFilterChange,
  showResearch,
  cardProp,
} = defineProps({
  columns: Array,
  request: Function,
  hasPage: {
    type: Boolean,
    default: true,
  },
  hasSearch: {
    type: Boolean,
    default: false,
  },
  pagination: Object,
  title: {
    default: '',
  },
  handleFilterChange: Function,
  showResearch: {
    type: Boolean,
    default: false,
  },
  cardProp: {
    type: Object,
    default: {},
  },
});

// withDefaults(, {
//   hasSearch: false,
//   hasPage: true,
// });
//搜索
let obj = ref({});
const handleSearch = (par) => {
  obj.value = par;
  handleRequest(par);
};
const filterChange = (value) => {
  handleFilterChange(value);
};
//重置
const handleReset = (formEl) => {
  if (hasPage) {
    page.pageNum = 1;
  }
  if (!formEl) return;
  formEl.resetFields();
  emits('handleReset');
  handleRequest({});
};
//分页

const handleCurrentChange = (val) => {
  page.pageNum = val;
  handleRequest(obj.value);
};

const handleSizeChange = (val) => {
  page.pageSize = val;
  handleRequest(obj.value);
};
const handleResetFilter = () => {
  tableRef.value.clearFilter();
};
//异步函数返回
const handleRequest = (par = {}) => {
  console.log(par);
  let params = {
    ...searchForm,
    ...par,
  };
  if (hasPage) {
    params = {
      ...searchForm,
      pageNum: page.pageNum,
      pageSize: page.pageSize,
      ...par,
    };
  }
  loading.value = true;
  request({ ...params }, (res) => {
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
const handleResetColum = async () => {
  columArr = [];
  for (let key of columns) {
    let obj = {};
    for (let k in key) {
      // if (k === "filters") {
      //   getDicts(key[k]).then((resp) => {
      //     const code = resp.data.map((p) => ({
      //       text: p.dictLabel,
      //       value: p.dictValue,
      //       elTagType: p.listClass,
      //       elTagClass: p.cssClass,
      //       label: p.dictLabel,
      //     }));

      //     console.log(code);
      //     obj[k] = code;
      //     console.log(obj);
      //   });
      // } else {
      obj[k] = key[k];
      // }
    }
    columArr.push(obj);
  }
  console.log(columArr);
};

onMounted(() => {
  handleResetColum();
  handleRequest();
});
//向父组件提供方法调用
defineExpose({
  handleSearch,
  handleResetFilter,
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
