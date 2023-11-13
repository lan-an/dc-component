<template>
  <div :class="[ns.b(), ns.m(direction)]">
    <div :class="ns.e('container')">
      <el-steps
        :class="ns.e('steps')"
        :active="current"
        finish-status="success"
        :direction="direction"
        style="height: auto"
      >
        <el-step v-for="step in steps" :key="step.uid" v-bind="step" />
      </el-steps>
      <div :class="ns.e('form')">
        <slot></slot>
      </div>
    </div>
    <slot name="submitter">
      <div :class="ns.e('submitter')">
        <el-space>
          <el-button v-if="current > 0" @click="prevStep" v-bind="prevBtnProps"
            >上一步</el-button
          >
          <el-button
            v-if="current === steps.length - 1"
            type="primary"
            @click="nextStep"
            :loading="loadingBtnNext"
            v-bind="nextBtnProps"
            >提交</el-button
          >
          <el-button
            v-else
            type="primary"
            @click="nextStep"
            v-bind="nextBtnProps"
            >下一步</el-button
          >
        </el-space>
      </div>
    </slot>
  </div>
</template>

<script setup lang="ts">
import { ref, getCurrentInstance, provide, watch, computed } from 'vue';
import { ElSpace, ElSteps, ElStep, ElButton } from 'element-plus';
import { useOrderedChildren } from 'element-plus/es/hooks/index.mjs';
import { useNamespace } from '@hooks/useNamespace';
import { stepsFormProps } from './stepsForm';

type StepsFormEmits = {
  (e: 'stepFinish', currentStep: number, values: any): void;
  (e: 'finish', values: any, cb: () => void): void;
  (e: 'update:currentStep', currentStep: number): void;
};

defineOptions({
  name: 'DStepsForm',
});

const props = defineProps(stepsFormProps);

const emit = defineEmits<StepsFormEmits>();

const ns = useNamespace('steps-form');

const {
  children: stepForms,
  addChild: addStepForm,
  removeChild: removeStepForm,
} = useOrderedChildren<any>(getCurrentInstance()!, 'DStepForm');

const current = ref(props.currentStep || 0);
watch(current, () => {
  emit('update:currentStep', current.value);
});

provide('DStepsForm', { current, stepForms, addStepForm, removeStepForm });

const steps = computed(() => {
  return (
    stepForms.value.map(({ title, stepProps = {} }) => ({
      ...stepProps,
      title,
    })) || []
  );
});

watch(stepForms, () => {
  stepForms.value.forEach((instance: any, index: number) => {
    instance.setIndex(index);
  });
});
const isLastStep = computed(() => {
  return current.value >= stepForms.value.length - 1;
});
watch(stepForms, () => {
  const stepsCount = stepForms.value.length;
  if (current.value > stepsCount - 1) {
    current.value = stepsCount - 1;
  }
});

const currentForm = computed(() => {
  return stepForms.value[current.value];
});

function prevStep() {
  current.value -= 1;
}
const loadingBtnNext = ref(false);
async function nextStep() {
  await currentForm.value?.validate();
  emit('stepFinish', current.value, currentForm.value.getValues());
  if (isLastStep.value) {
    loadingBtnNext.value = true;
    emit(
      'finish',
      stepForms.value.map((form) => form.getValues()),
      () => {
        loadingBtnNext.value = false;
        current.value = 0;
      },
    );
    return;
  }
  current.value += 1;
}

defineExpose({
  prevStep,
  nextStep,
});
</script>

<style lang="scss">
@include b(steps-form) {
  @include e(container) {
    height: 100%;

    @include e(steps) {
      flex-basis: 200px;
      flex-shrink: 0;
    }

    @include e(form) {
      min-height: 200px;
      overflow: auto;
    }
  }

  @include m(vertical) {
    @include e(container) {
      display: flex;
      align-items: stretch;

      @include e(form) {
        flex-grow: 1;
      }
    }
  }

  @include m(horizontal) {
    @include e(steps) {
      margin-bottom: 12px;
    }
  }

  @include e(submitter) {
    display: flex;
    flex-direction: row-reverse;
  }
}
</style>
