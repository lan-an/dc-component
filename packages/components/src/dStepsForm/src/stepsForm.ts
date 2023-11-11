import type { ButtonProps, StepsProps } from 'element-plus';
import type { ExtractPropTypes, PropType } from 'vue';
import type StepsForm from './stepsForm.vue';

export const stepsFormProps = {
  direction: {
    type: String as PropType<StepsProps['direction']>,
    default: 'horizontal',
  },
  prevBtnProps: {
    type: Object as PropType<Partial<ButtonProps>>,
  },
  nextBtnProps: {
    type: Object as PropType<Partial<ButtonProps>>,
  },
  currentStep: {
    type: Number as PropType<StepsProps['active']>,
  },
} as const;

export type StepsFormProps = ExtractPropTypes<typeof stepsFormProps>;

export type StepsFormEmits = {
  (e: 'stepFinish', currentStep: number, values: any): void;
  (e: 'finish', values: any, cb: () => void): void;
  (e: 'update:currentStep', currentStep: number): void;
};

export type StepsFormInstance = InstanceType<typeof StepsForm>;
