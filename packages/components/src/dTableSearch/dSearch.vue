<!--
 * @Date: 2023-11-14 16:19:52
 * @Auth: 463997479@qq.com
 * @LastEditors: 463997479@qq.com
 * @LastEditTime: 2023-11-14 18:07:00
 * @FilePath: \dc-component\packages\components\src\dTableSearch\dSearch.vue
-->
<template>
  <el-form
    v-bind="{ ...searchFormProps }"
    ref="ruleFormRef"
    :model="searchForm"
  >
    <el-space :style="[showFalg ? { 'margin-bottom': '20.0px' } : '']" wrap>
      <!-- <slot :search="searchForm" name="searchData"></slot> -->
      <template :key="item.prop" v-for="item in searchFormItem as any">
        <el-form-item
          :prop="item.model"
          :label="item.label"
          :labelWidht="item.labelWidht"
        >
          <component
            :is="ElInput"
            v-model.trim="searchForm[item.model]"
            :placeholder="item?.placeholder"
          />
        </el-form-item>
      </template>
      <!-- <template v-if="!showFalg">
        <slot name="fold" :search="searchForm"></slot>
      </template> -->
      <div
        :class="[
          'card-header-content',
          showFalg ? 'search-absolute' : 'search-relative',
        ]"
      >
        <el-form-item>
          <el-button :loading="loading" type="primary" @click="handleSearch"
            >查询</el-button
          >
          <el-button @click="handleReset(ruleFormRef)">重置</el-button>
          <el-button color="#468fff" v-if="more" @click="handleMore" plain text>
            {{ showFalg ? '展开' : '收起' }}

            <el-icon class="el-icon--right">
              <component :is="!showFalg ? ArrowUp : ArrowDown" />
            </el-icon>
          </el-button>
        </el-form-item>
      </div>
    </el-space>
  </el-form>
</template>
<script setup lang="ts">
import { ArrowDown, ArrowUp } from '@element-plus/icons-vue';
import {
  ElSpace,
  ElButton,
  ElForm,
  ElIcon,
  ElInput,
  ElFormItem,
} from 'element-plus';
import { ref, toRefs, watch } from 'vue';
import type { FormInstance } from 'element-plus';

const showFalg = ref(false);

const ruleFormRef = ref<FormInstance>();
const emit = defineEmits(['handleSearch', 'handleReset']);
const prop = defineProps({
  initParam: {
    type: Object,
    default: () => {},
  },
  more: {
    type: Boolean,
    default: () => false,
  },
  searchFormItem: {
    type: Array,
    default: () => [],
  },
  searchFormProps: {
    type: Object,
    default: () => {},
  },
  loading: {
    type: Boolean,
    default: () => false,
  },
});
const { loading, more, initParam, searchFormItem } = toRefs(prop);
const _param = {};
searchFormItem.value.forEach((item: Record<string, any>) => {
  _param[item.model] = item.defaultValue ?? '';
});

const getParam = () => {
  return searchForm.value;
};

const searchForm = ref(Object.assign(_param, initParam.value));
watch(
  () => searchForm,
  (val) => {
    console.log(val);
  },
);
const handleMore = () => {};
const handleReset = (formEl) => {
  if (!formEl) return;
  console.log(formEl);
  formEl.resetFields();
};
const handleSearch = () => {
  emit('handleSearch', searchForm.value);
};
defineExpose({
  getParam,
});
</script>
