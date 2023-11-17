<!--
 * @Date: 2023-10-30 10:58:31
 * @Auth: 463997479@qq.com
 * @LastEditors: 463997479@qq.com
 * @LastEditTime: 2023-11-17 09:36:41
 * @FilePath: \dc-component\packages\components\src\dTableSearch\index.vue
-->
<template>
  <el-config-provider :locale="locale">
    <div class="d-content-table">
      <el-card v-bind="{ ...(cardProp as any) }" class="box-card">
        <!-- 搜索 -->
        <template v-if="hasSearch" #header>
          <div class="card-header">
            <d-search
              :searchFormItem="paramColum"
              :initParam="initParam"
              :loading="loading"
              :searchProp="searchProp"
              @handleSearch="handleSearch"
              @handleReset="handleReset"
              ref="dSearchFormRef"
            >
            </d-search>
          </div>
        </template>
        <!--table-->
        <div class="d-content-table-body">
          <!--顶部ActionBar-->
          <div class="d-content-table-action">
            <div class="d-table-left">
              <slot name="dTableLeft"></slot>
            </div>
            <div class="d-table-right">
              <slot name="dTableRight"></slot>
              <el-button @click="handleSearch" :icon="Refresh"></el-button>
              <el-button
                circle
                ref="buttonRef"
                v-click-outside="onClickOutside"
              >
                <el-icon><Grid /></el-icon>
              </el-button>
              <el-popover
                ref="popoverRef"
                :virtual-ref="buttonRef"
                trigger="click"
                title="Colum配置"
                virtual-triggering
              >
                <div>
                  <el-checkbox
                    v-model="checkAll"
                    :indeterminate="isIndeterminate"
                    @change="handleCheckAllChange"
                    >全选</el-checkbox
                  >
                </div>
                <div>
                  <el-tree
                    :data="tree.treeColum"
                    show-checkbox
                    default-expand-all
                    ref="treeRef"
                    node-key="label"
                    :default-checked-keys="tree.defaultChecked"
                    :props="{
                      label: 'label',
                    }"
                    @check-change="handleCheckChange"
                    :check-on-click-node="true"
                  />
                </div>
              </el-popover>
            </div>
          </div>

          <el-table
            v-bind="{ ...$attrs, ...tableProp }"
            :data="tableData"
            style="width: 100%"
            class="d-prop--table"
          >
            <template v-for="item in tree.columArr">
              <el-table-column
                v-bind="{ ...item }"
                :key="item.prop"
                v-if="item.checked && !item.hideInTable"
              >
                <template v-if="item.slotName" #default="scope">
                  <slot
                    :name="item.slotName"
                    :data="{ ...scope.row, index: scope.$index }"
                  >
                  </slot>
                </template>
                <template v-if="item.headerSlot" #header>
                  <slot :name="item.headerSlot"></slot>
                </template>
              </el-table-column>
            </template>
            <template #empty>
              <slot name="empty"></slot>
            </template>
            <template #append>
              <slot name="append"></slot>
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
  </el-config-provider>
</template>

<script lang="ts" name="DTableSearch" setup>
//定义组件name
defineOptions({
  name: 'DTableSearch',
});
import type { ColumProps, TableProp } from '@/dTableSearch/dTableSearch';
import type { FormInstance } from 'element-plus';
import DPage from './footer.vue';
import DSearch from './dSearch.vue';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';

import {
  onMounted,
  reactive,
  ref,
  unref,
  nextTick,
  computed,
  watch,
} from 'vue';
import { Refresh, Grid } from '@element-plus/icons-vue';
import {
  ElButton,
  ElCard,
  ElTable,
  ElTableColumn,
  ElIcon,
  ElPopover,
  ElTree,
  ElLoading,
  ElCheckbox,
  ElConfigProvider,
  ClickOutside as vClickOutside,
} from 'element-plus';

const buttonRef = ref<HTMLDivElement>();
const popoverRef = ref();
const onClickOutside = () => {
  unref(popoverRef).popperRef?.delayHide?.();
};
const tableData = ref<any[]>([]);

const loading = ref<boolean>(false);

const locale = ref(zhCn);

const treeRef = ref<InstanceType<typeof ElTree>>();

const dSearchFormRef = ref<InstanceType<typeof DSearch>>();

const checkAll = ref<boolean>(true);
const isIndeterminate = ref<boolean>(false);
//外部数据参数
const {
  request,
  hasPage,
  columns,
  pagination,
  loadingParams,
  hasSearch,
  isloading,
  cardProp,
  tableProp,
  initParam,
  searchProp,
} = withDefaults(defineProps<TableProp>(), {
  hasSearch: true,
  hasPage: true,
  more: false,
  pagination: {
    pageSize: 10,
    pageNum: 1,
  },
  isloading: true,
  initParam: {},
  searchProp: {
    searchCol: { xs: 1, sm: 2, md: 2, lg: 3, xl: 4 },
    suffix: false,
  },
});
let tree = reactive<{
  columArr: any[];
  defaultChecked: string[];
  treeColum: ColumProps[];
}>({
  defaultChecked: [],
  treeColum: [],
  columArr: [],
});
const page = reactive<{
  pageNum?: number;
  pageSize?: number;
  total?: number;
}>({
  pageNum: pagination.pageNum,
  pageSize: pagination.pageSize,
  total: 100,
});

/**
 *
 * 查询
 */
const handleSearch = (): void => {
  handleRequest();
};
/**
 *
 * @param formEl 重置表格参数
 */
const handleReset = async (formEl: FormInstance | undefined) => {
  if (hasPage) {
    page.pageNum = pagination.pageNum;
    page.pageSize = pagination?.pageSize;
  }

  handleRequest();
};
/**
 *
 * @param val 分页change
 */

const handleCurrentChange = (val: number): void => {
  page.pageNum = val;
  handleRequest();
};
/**
 *
 * @param val 分页change
 */
const handleSizeChange = (val: number): void => {
  page.pageSize = val;
  handleRequest();
};

const getParam = () => {
  if (!dSearchFormRef.value) return;
  return dSearchFormRef.value.getParam();
};
/**
 *
 * 数据请求
 */
const handleRequest = (): void => {
  let _param = {
    ...getParam(),
    ...initParam,
  };
  if (hasPage) {
    _param = {
      ..._param,
      pageNum: page.pageNum,
      pageSize: page.pageSize,
    };
  }

  let params = {};
  Object.keys(_param || {}).forEach((key) => {
    if (_param[key] !== undefined && _param[key] !== null) {
      params[key] = _param[key];
    }
  });

  loading.value = true;

  let loadingEl = null;

  if (isloading) {
    loadingEl = ElLoading.service({
      target: '.d-prop--table',
      background: 'rgba(255, 255, 255, 0.5)',
      ...loadingParams,
    });
  }

  request({ ...params }, (res) => {
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
const TYPE_COLUM = ['selection', 'index'];

const handleResetColum = (): void => {
  tree.defaultChecked = [];
  tree.treeColum = columns.filter(
    (_) => TYPE_COLUM.indexOf(_.type) < 0 && !_.hideInTable,
  );
  tree.columArr = columns.map((_) => {
    return { ..._, checked: true };
  });
  columns.forEach((_) => {
    tree.defaultChecked.push(!_.hideInTable && (_?.prop as string));
  });
};
//搜索条件异步数据处理
const paramColum = computed(() => {
  columns.forEach(async (_) => {
    if (!_.search) {
      return;
    }
    if (typeof _.fieldProps.request === 'function') {
      const { data } = await _.fieldProps.request();
      _.fieldProps.option = data;
      _.fieldProps.data = data;
    }
  });
  return columns.filter((item) => item.search);
});

/**
 * 点击节点切换colum显示
 */
const handleCheckChange = (node: ColumProps): void => {
  tree.columArr = tree.columArr.map((item) =>
    item.prop === node.prop ? { ...item, checked: !item.checked } : item,
  );
  const checkedCount: number = treeRef.value!.getCheckedNodes(true).length;
  checkAll.value = checkedCount === tree.treeColum.length;
  isIndeterminate.value =
    checkedCount > 0 && checkedCount < tree.treeColum.length;
};
const handleCheckAllChange = (val: boolean) => {
  if (val) {
    const arr: any[] = [];
    columns.forEach((_) => {
      arr.push(_?.prop);
    });
    treeRef.value!.setCheckedKeys(arr, false);
  } else {
    treeRef.value!.setCheckedKeys([], false);
  }
  tree.columArr = tree.columArr.filter((_) => {
    return {
      ..._,
      checked: !val,
    };
  });

  isIndeterminate.value = false;
};

onMounted(() => {
  handleResetColum();
  handleRequest();
});

defineExpose({
  handleSearch,
  getParam,
});
</script>
<style lang="scss" scoped>
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
