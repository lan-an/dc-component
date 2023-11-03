<!--
 * @Date: 2023-10-30 10:58:31
 * @Auth: 463997479@qq.com
 * @LastEditors: 463997479@qq.com
 * @LastEditTime: 2023-11-03 14:35:46
 * @FilePath: \dc-component\packages\components\src\dTableSearch\index.vue
-->
<template>
  <div class="d-content-table">
    <el-card class="box-card">
      <!-- 搜索 -->
      <template v-if="hasSearch" #header>
        <div class="card-header">
          <el-form
            ref="ruleFormRef"
            v-bind="{ ...searchFormProps }"
            :model="searchForm"
          >
            <el-space
              :style="[showFalg ? { 'margin-bottom': '20.0px' } : '']"
              wrap
            >
              <slot :search="searchForm" name="searchData"></slot>

              <template v-if="!showFalg">
                <slot name="fold" :search="searchForm"></slot>
              </template>
              <div
                :class="[
                  'card-header-content',
                  showFalg ? 'search-absolute' : 'search-relative',
                ]"
              >
                <el-button
                  :loading="loading"
                  type="primary"
                  @click="handleSearch"
                  >查询</el-button
                >
                <el-button @click="handleReset(ruleFormRef)">重置</el-button>
                <el-button
                  color="#468fff"
                  v-if="more"
                  @click="handleMore"
                  plain
                  text
                >
                  {{ showFalg ? '展开' : '收起' }}

                  <el-icon class="el-icon--right">
                    <ArrowUp v-if="!showFalg" />
                    <ArrowDown v-else />
                  </el-icon>
                </el-button>
              </div>
            </el-space>
          </el-form>
        </div>
      </template>

      <div class="d-content-table-body">
        <!--顶部ActionBar-->
        <div class="d-content-table-action">
          <div class="d-table-left">
            <span v-if="title">{{ title }}</span>
          </div>
          <div class="d-table-right">
            <slot name="dTableRight"></slot>
            <el-button @click="handleSearch" :icon="Refresh"></el-button>
            <el-button circle ref="buttonRef" v-click-outside="onClickOutside">
              <el-icon><Grid /></el-icon>
            </el-button>
            <el-popover
              ref="popoverRef"
              :virtual-ref="buttonRef"
              trigger="click"
              title="Colum配置"
              virtual-triggering
            >
              <div></div>
              <div>
                <el-tree
                  :data="treeObjColum.treeColum"
                  show-checkbox
                  default-expand-all
                  node-key="label"
                  :default-checked-keys="treeObjColum.defaultChecked"
                  :props="{
                    label: 'label',
                  }"
                  @check-change="handleCheckChange"
                />
              </div>
            </el-popover>
          </div>
        </div>

        <el-table
          v-bind="{ ...$attrs }"
          :data="tableData"
          style="width: 100%"
          class="d-prop--table"
        >
          <template v-for="(item, index) in treeObjColum.columArr">
            <el-table-column
              v-bind="{ ...item }"
              :key="item.prop"
              v-if="item.checked"
            >
              <template v-if="item.slotName" #default="scope">
                <slot
                  :name="item.slotName"
                  :data="{ ...scope.row, index: scope.$index }"
                ></slot>
              </template>
            </el-table-column>
          </template>
        </el-table>
        <!-- 分页 -->
        <div class="d-table-footer">
          <d-page
            @handleCurrentChange="handleCurrentChange"
            @handleSizeChange="handleSizeChange"
            :pagination="{
              ...pagination,
              total: page.total,
            }"
          ></d-page>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts" name="DTableSearch" setup>
import type { ColumProps } from '@/components';
import type { FormInstance } from 'element-plus';
import DPage from './footer.vue';
import { onMounted, reactive, ref, unref, nextTick } from 'vue';
import { Refresh, ArrowDown, ArrowUp, Grid } from '@element-plus/icons-vue';
import {
  ElSpace,
  ElButton,
  ElCard,
  ElTable,
  ElTableColumn,
  ElForm,
  ElIcon,
  ElPopover,
  ElTree,
  ElLoading,
  ElFormItem,
} from 'element-plus';
import { ClickOutside as vClickOutside } from 'element-plus';
//定义组件name
defineOptions({
  name: 'DTableSearch',
});
const buttonRef = ref();
const popoverRef = ref();
const onClickOutside = () => {
  unref(popoverRef).popperRef?.delayHide?.();
};

const tableData = ref([]);

//查询条件
let searchForm = reactive({});
const loading = ref(false);

//控制显示搜索条件展示
const showFalg = ref(false);
const ruleFormRef = ref<FormInstance>();
let treeObjColum = reactive<{
  columArr: any[];
  defaultChecked: any[];
  treeColum: any[];
}>({
  defaultChecked: [],
  treeColum: [],
  columArr: [],
});
//外部数据参数
const {
  request,
  hasPage,
  columns,
  pagination,
  loadingParams,
  searchFormProps,
  title,
  more,
  hasSearch,
  isloading,
} = withDefaults(
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
    more?: boolean;
    searchFormProps?: any;
    loadingParams?: {
      body?: boolean;
      fullscreen?: boolean;
      text?: string;
      background?: string;
    };
    isloading?: boolean;
  }>(),
  {
    hasSearch: true,
    hasPage: true,
    more: false,
    pagination: {
      pageSize: 10,
    },
    isloading: true,
  },
);

const page = reactive({
  pageNum: 1,
  pageSize: pagination.pageSize,
  total: 100,
});

/**
 *
 * 查询
 */
const handleSearch = () => {
  handleRequest();
};
/**
 *
 * @param formEl 重置表格参数
 */
const handleReset = (formEl: FormInstance | undefined) => {
  if (hasPage) {
    page.pageNum = pagination?.pageNum;
  }
  if (!formEl) return;
  formEl.resetFields();
  handleRequest();
};
/**
 *
 * @param val 分页change
 */

const handleCurrentChange = (val: number) => {
  page.pageNum = val;
  handleRequest();
};
/**
 *
 * @param val 分页change
 */
const handleSizeChange = (val: number) => {
  page.pageSize = val;
  handleRequest();
};

/**
 *
 * 数据请求
 */
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
  let loadingEl = null;
  if (isloading) {
    loadingEl = ElLoading.service({
      target: '.d-prop--table',
      background: 'rgba(255, 255, 255, 0.5)',
      ...loadingParams,
    });
  }

  request({ ...params }, res => {
    if (res) {
      if (hasPage) {
        tableData.value = res.data;
        page.total = res.total;
      } else {
        tableData.value = res.data;
      }
      loading.value = false;
      isloading &&
        nextTick(() => {
          loadingEl.close();
        });
    }
  });
};

/**
 * 循环处理colum中数据格式
 */
const handleResetColum = (): void => {
  treeObjColum.columArr = [];
  treeObjColum.treeColum = [];
  treeObjColum.defaultChecked = [];
  for (let key of columns) {
    let obj = {};

    for (let k in key as any) {
      obj[k] = key[k];
      treeObjColum.defaultChecked.push(key[k]);
    }
    treeObjColum.columArr.push({ ...obj, checked: true });
    treeObjColum.treeColum.push(obj);
  }
};

/**
 * 搜索展开折叠
 */
const handleMore = () => {
  showFalg.value = !showFalg.value;
};

/**
 * 点击节点切换colum显示
 */
const handleCheckChange = (node: ColumProps, check: boolean, flag: boolean) => {
  if (!check) {
    treeObjColum.defaultChecked = treeObjColum.defaultChecked.filter(
      item => item !== node.prop,
    );
  } else {
    treeObjColum.defaultChecked.push(node.prop);
  }
  treeObjColum.columArr = treeObjColum.columArr.map(item =>
    item.prop === node.prop ? { ...item, checked: !item.checked } : item,
  );
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
.card-header-content {
  display: flex;
  position: relative;
}
.search-absolute {
  position: absolute;
  bottom: 0;
  right: 0;
}
.search-relative {
  position: relative;
  margin-bottom: 18px;
}
.card-header-wrapper {
  display: flex;
}
.card-header {
  position: relative;
}
</style>
