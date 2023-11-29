<template>
  <el-drawer v-model:modelValue="modelValue" v-bind="{ ...$attrs }" :title="title" :direction="direction" :size="size"
    @close="handleClose(ruleFormRef)" class="demo-drawer">
    <template #header>
      <slot name="header"> </slot>
    </template>
    <el-form v-bind="{ ...$attrs }" ref="ruleFormRef" :model="formData" :rules="rules">
      <template #default>
        <slot :form="formData" name="formData"></slot>
      </template>
    </el-form>

    <template v-if="showFooter" #footer>
      <span class="drawer-footer">
        <el-button @click="handleCancel(ruleFormRef)">{{
          cancelText
        }}</el-button>
        <slot name="submitter"></slot>
        <el-button type="primary" @click="handleConfirm(ruleFormRef)">
          {{ confirmText }}
        </el-button>
      </span>
    </template>
  </el-drawer>
</template>
<script lang="ts" setup>
import { ref, watch, toRefs } from 'vue';
import { ElButton, ElForm, ElDrawer } from 'element-plus';
import type { FormProp, DrawerFormEmit } from '@/dDrawerForm/dDrawerForm';
import type { FormInstance } from 'element-plus';
defineOptions({
  name: 'DDrawerForm',
});
const formData = ref<object>({});
const emits = defineEmits<DrawerFormEmit>();
const ruleFormRef = ref<FormInstance>(null);
const props = withDefaults(
  defineProps<FormProp>(),
  {
    cancelText: '取消',
    confirmText: '确认',
    modelValue: false,
    rules: null,
    title: '新建表单',
    size: '30%',
    direction: 'rtl',
    showFooter: true,
    form: {},
  },
);

const { modelValue, form,rules } = toRefs(props);
watch(
  () => form,
  (newValue: any) => {
    if (newValue) {
      formData.value = newValue.value;
    } else {
      formData.value = {};
    }
  },
  { immediate: true, deep: true },
);
/**
 *
 * @param formEl 取消重置表单
 */

const handleCancel = (formEl: FormInstance | undefined) => {
  emits('update:modelValue', false);
  emits('handleCancel', formEl);
};
/**
 *
 * @param formEl 确认重置表单并返回表单内容
 */
const handleConfirm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      emits(
        'complete',
        formData.value,
        () => {
          emits('update:modelValue', false);
          formEl.resetFields();
        },
        formEl,
      );
    } else {
      console.log('error submit!', fields);
    }
  });
};
/**
 * 重置表单信息
 */
const resetFields = () => {
  ruleFormRef.value.resetFields();
};
/**
 *
 * @param formEl 抽屉关闭回调
 */
const handleClose = (formEl: FormInstance | undefined) => {
  emits('update:modelValue', false);
};
/**
 * 表单验证
 */
const validate = async () => {
  const state = await ruleFormRef.value.validate((valid) => {
    return valid
  });
  if (state) {
    return formData.value;
  } else {
    return false;
  }
};
defineExpose({
  resetFields,
  validate,
});
</script>