<template>
  <el-form v-show="isCurrent" ref="formRef">
    <slot></slot>
  </el-form>
</template>

<script setup lang="ts">
import {
  ref,
  inject,
  getCurrentInstance,
  reactive,
  onBeforeUnmount,
  toRefs,
  computed,
  Ref,
  useAttrs,
} from 'vue';
import { ElForm, FormInstance } from 'element-plus';
import { stepFormProps } from './stepForm';

export interface StepFormState {
  uid: number;
  setIndex: (val: number) => void;
  validate: FormInstance['validate'];
  getValues: () => Record<string, any>;
}

defineOptions({
  name: 'DStepForm',
});

const attrs = useAttrs();

const props = defineProps(stepFormProps);

const parent = inject('DStepsForm') as any;

const currentInstance = getCurrentInstance();

onBeforeUnmount(() => {
  parent.removeStepForm(stepFormState.uid);
});

const index = ref(-1);
const setIndex = (val: number) => {
  index.value = val;
};

const isCurrent = computed(() => {
  return parent.current.value === index.value;
});

const formRef = ref<Ref<FormInstance>>(null);
const validate = () => {
  return formRef.value.validate();
};
const getValues = () => {
  return Object.assign({}, attrs.model);
};

const stepFormState = reactive<StepFormState>({
  uid: currentInstance!.uid,
  ...toRefs(props),
  setIndex,
  validate,
  getValues,
});

parent.addStepForm(stepFormState);
</script>

<style lang="scss"></style>
