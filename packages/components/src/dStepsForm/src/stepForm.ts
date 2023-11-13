import { type StepProps, type FormProps } from 'element-plus';
import type { ExtractPropTypes, PropType } from 'vue';

export const stepFormProps = {
  /**
   * @description step title
   */
  title: {
    type: String,
    default: '',
  },
  /**
   * @description step props
   */
  stepProps: {
    type: Object as PropType<Omit<StepProps, 'title' | 'status'>>,
    default: () => ({}),
  },
} as const;

export type StepFormProps = ExtractPropTypes<typeof stepFormProps> & FormProps;
