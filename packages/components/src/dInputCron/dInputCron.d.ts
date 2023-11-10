// input cron组合组件
export interface CronEmits {
  (event: "close"): void;
  (event: "change",value: string): void;
}

export interface ICronProps {
  cronValue?: string,
  maxHeight?: string,
  disabled?: boolean,
  config?: IcronConfig
}

// cron组件
export interface InputCronEmits {
  (event: "update:value", value: string): void;
  (event: "cronChange", value: string): void;
}

export interface IcronConfig {
  maxHeight?: number | string,
  startYear?: number
}
export interface IInputCronProps {
  value?: string,
  config?: IcronConfig
}