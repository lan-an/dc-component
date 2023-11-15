<!--
 * @Date: 2023-11-14 16:19:52
 * @Auth: 463997479@qq.com
 * @LastEditors: 463997479@qq.com
 * @LastEditTime: 2023-11-15 17:54:36
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
            :options="item?.fieldProps?.options"
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
                v-for="col in item.fieldProps.option"
                :key="col.value"
                :label="col.label"
                :value="col.value"
              />
            </template>
            <slot v-else></slot>
          </component>
        </el-form-item>
      </GridItem>

      <GridItem suffix>
        <div :style="{ 'text-align': showFalg ? 'right' : 'left' }">
          <el-button :loading="loading" type="primary" @click="handleSearch"
            >查询</el-button
          >
          <el-button @click="handleReset(ruleFormRef)">重置</el-button>
          <el-button color="#468fff" v-if="more" @click="handleMore" plain text>
            {{ !showFalg ? '展开' : '收起' }}

            <el-icon class="el-icon--right">
              <component :is="!showFalg ? ArrowUp : ArrowDown" />
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
} from 'element-plus';
import { ref, toRefs, watch } from 'vue';
import type { FormInstance } from 'element-plus';
import Grid from '../Grid/index.vue';
import GridItem from '../Grid/components/GridItem.vue';

const COMPONENT_ENUM = {
  ElSelect: ElSelect,
  ElInput: ElInput,
  ElDatePicker: ElDatePicker,
  ElCascader: ElCascader,
};
const showFalg = ref(false);

type SearchType = {
  more?: boolean;
  searchFormProps?: object;
  loading?: boolean;
  searchFormItem?: any[];
};
const ruleFormRef = ref<FormInstance>();

const emit = defineEmits(['handleSearch', 'handleReset']);

const prop = defineProps<SearchType>();
console.log(prop);
const { loading, more, searchFormItem } = toRefs(prop);
const searchCol = ref({ xs: 1, sm: 2, md: 2, lg: 3, xl: 4 });
const _param = {};

const hasSearchTransform = ref([]);
//参数defaultValue
searchFormItem.value.forEach((item: Record<string, any>) => {
  _param[item.key ?? item.prop] = item.defaultValue ?? '';
  if (item?.search?.transform) {
    hasSearchTransform.value.push(item.key ?? item.prop);
  }
});

const searchForm = ref({ ..._param }); //搜索参数

const getParam = () => {
  const _searchParam = Object.assign({ ...searchForm.value }, {});
  if (hasSearchTransform.value.length !== 0) {
    hasSearchTransform.value.forEach((_) => {
      delete _searchParam[_];
    });
  }
  return _searchParam;
};

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

watch(
  () => searchForm.value,
  (val) => {
    console.log(val);
  },
);
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
const handleChange = (value, event) => {
  console.log(value);
  console.log(event);
  if (event.search?.transform) {
    const _obj = event?.search.transform(value);
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
  }
}
</style>
