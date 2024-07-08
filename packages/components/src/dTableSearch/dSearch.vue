<!--
 * @Date: 2023-11-14 16:19:52
 * @Auth: 463997479@qq.com
 * @LastEditors: 463997479@qq.com
 * @LastEditTime: 2023-11-22 15:48:39
 * @FilePath: \dc-component\packages\components\src\dTableSearch\dSearch.vue
-->
<template>
  <el-form
    v-bind="{ ...searchFormProps }"
    ref="ruleFormRef"
    :model="searchForm"
  >
    <Grid
      ref="gridRef"
      class="content-wrapper"
      :collapsed="!showFalg"
      :gap="[20, 0]"
      :cols="searchCol"
    >
      <GridItem
        v-for="(item, index) in searchFormItem"
        :key="item.prop"
        v-bind="getResponsive(item)"
        :index="index"
      >
        <el-form-item
          :prop="item.key ?? item.prop"
          :label="item.label"
          :label-width="item.labelWidth"
        >
          <component
            :is="COMPONENT_ENUM[item.valueType]"
            v-model.trim="searchForm[item.key ?? item.prop]"
            :placeholder="item?.placeholder"
            v-bind="{ ...item?.fieldProps }"
            :options="item?.fieldProps?.option"
            :data="item?.fieldProps?.data"
            @change="handleChange($event, item)"
          >
            <template
              v-if="item.valueType === 'ElCascader'"
              #default="{ data }"
            >
              <span>{{ data[item.fieldProps.label] ?? 'label' }}</span>
            </template>
            <template v-if="item.valueType === 'ElSelect'">
              <component
                :is="ElOption"
                v-for="(col, index) in item.fieldProps.option"
                :key="index"
                v-bind="{ ...col }"
              />
            </template>

            <template v-else-if="item.valueType === 'ElRadioGroup'">
              <component
                :is="ElRadioButton"
                v-for="(col, index) in item.fieldProps.option"
                :key="index"
                v-bind="{ ...col }"
              />
            </template>
            <template
              v-else-if="
                item.valueType === 'ElRadio' ||
                item.valueType === 'ElRadioButton'
              "
            >
              <component
                :is="item.valueType === 'ElRadio' ? ElRadio : ElRadioButton"
                v-for="(col, index) in item.fieldProps.option"
                :key="index"
                v-bind="{ ...col }"
              />
            </template>

            <slot v-else></slot>
          </component>
        </el-form-item>
      </GridItem>

      <GridItem :suffix="suffix">
        <div :class="[suffix ? 'text-content-right' : 'text-content-left']">
          <el-button :loading="loading" type="primary" @click="handleSearch"
            >查询</el-button
          >
          <el-button @click="handleReset(ruleFormRef)">重置</el-button>
          <el-button
            color="#468fff"
            v-if="showCollapse"
            @click="handleMore"
            plain
            text
          >
            {{ !showFalg ? '展开' : '收起' }}
            <el-icon class="el-icon--right">
              <component :is="showFalg ? ArrowUp : ArrowDown" />
            </el-icon>
          </el-button>
        </div>
      </GridItem>
    </Grid>
  </el-form>
</template>
<script setup lang="ts">
import { ArrowDown, ArrowUp } from '@element-plus/icons-vue';
import {
  ElButton,
  ElForm,
  ElIcon,
  ElInput,
  ElFormItem,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElCascader,
  ElCheckboxGroup,
  ElCheckbox,
  ElRadioGroup,
  ElRadioButton,
  ElRadio,
  ElTreeSelect,
} from 'element-plus';
import { computed, ref, toRefs, watch } from 'vue';
import type { FormInstance } from 'element-plus';
import Grid from '../Grid/index.vue';
import GridItem from '../Grid/components/GridItem.vue';

const COMPONENT_ENUM = {
  ElSelect: ElSelect,
  ElInput: ElInput,
  ElDatePicker: ElDatePicker,
  ElCascader: ElCascader,
  ElCheckboxGroup: ElCheckboxGroup,
  ElCheckbox: ElCheckbox,
  ElRadioGroup: ElRadioGroup,
  ElRadioButton: ElRadioGroup,
  ElRadio: ElRadioGroup,
  ElTreeSelect: ElTreeSelect,
};
const showFalg = ref(false);

type SearchType = {
  searchFormProps?: object;
  loading?: boolean;
  searchFormItem?: any[];
  searchProp?: any;
};
const ruleFormRef = ref<FormInstance>();

const emit = defineEmits(['handleSearch', 'handleReset']);

const prop = defineProps<SearchType>();

const { searchProp, loading, searchFormItem } = toRefs(prop);

const { suffix, searchCol } = toRefs(searchProp.value);
const _param = ref({});

const searchForm = ref({}); //搜索参数

const hasSearchTransform = ref([]);

//参数defaultValue
const getDefaultValue = (arg: Record<string, any>) => {
  arg.forEach((item: Record<string, any>) => {
    _param.value[item.key ?? item.prop] = item.defaultValue ?? '';
    if (item?.search?.transform) {
      hasSearchTransform.value.push(item.key ?? item.prop);
    }
  });
  searchForm.value = { ..._param.value };
};
//格式化默认值
getDefaultValue(searchFormItem.value);

//跳转设置参数
watch(
  () => searchFormItem.value,
  (value) => {
    getDefaultValue(value);
  },
  {
    immediate: true,
    deep: true,
  },
);

/**
 * 获取参数剔除无效参数
 */
const getParam = () => {
  const _searchParam = Object.assign({ ...searchForm.value }, {});
  if (hasSearchTransform.value.length !== 0) {
    hasSearchTransform.value.forEach((_) => {
      delete _searchParam[_];
    });
  }
  return _searchParam;
};
// 获取响应式断点
const gridRef = ref();
const breakPoint = computed(() => gridRef.value?.breakPoint);

// 判断是否显示 展开/合并 按钮
const showCollapse = computed(() => {
  let show = false;
  searchFormItem.value.reduce((prev, current) => {
    prev +=
      (current.search![breakPoint.value]?.span ?? current.search?.span ?? 1) +
      (current.search![breakPoint.value]?.offset ??
        current.search?.offset ??
        0);
    if (typeof searchCol.value !== 'number') {
      if (prev >= searchCol.value[breakPoint.value]) show = true;
    } else {
      if (prev >= searchCol.value) show = true;
    }
    return prev;
  }, 0);
  return show;
});
const getResponsive = (item: any) => {
  return {
    span: item.search?.span,
    offset: item.search?.offset ?? 0,
    xs: item.search?.xs,
    sm: item.search?.sm,
    md: item.search?.md,
    lg: item.search?.lg,
    xl: item.search?.xl,
  };
};

const handleMore = () => {
  showFalg.value = !showFalg.value;
};
const handleReset = (formEl) => {
  if (!formEl) return;
  formEl.resetFields();
  emit('handleReset', formEl);
};
const handleSearch = () => {
  emit('handleSearch', searchForm.value);
};
/**
 * @description 自定义格式化
 * @param value
 * @param event
 */
const handleChange = (value, event) => {
  if (event?.search?.transform) {
    const _obj = event.search.transform(value);
    searchForm.value = Object.assign({ ...searchForm.value }, _obj);
  }
};
defineExpose({
  getParam,
});
</script>
<style lang="scss">
.el-form {
  .content-wrapper {
    .el-form-item__content > * {
      width: 100% !important;
    }
    .text-content-right {
      display: flex;
      justify-content: flex-end;
    }
    .text-content-left {
      display: flex;
      justify-content: flex-start;
    }
  }
}
</style>
