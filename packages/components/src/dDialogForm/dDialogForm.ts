import type { FormInstance } from 'element-plus';

export type FormProp = {
  form: any;
  cancelText?: string;
  confirmText?: string;
  modelValue: boolean;
  formProp?: object;
  rules?: object;
  title?: string;
  ruleFormRef?: any;
  showFooter?: boolean;
};

export interface DialogFormEmit{
  (event: 'complete', value: object,fun:()=>void,e:FormInstance): void;
  (event: 'update:modelValue', value: boolean): void;

  (event: 'handleCancel', e: FormInstance): void;
  (event: 'handleConfirm', e: FormInstance): void;
} 