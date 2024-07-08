/*
 * @Date: 2023-10-30 13:26:08
 * @Auth: 463997479@qq.com
 * @LastEditors: 463997479@qq.com
 * @LastEditTime: 2023-11-16 16:27:02
 * @FilePath: \dc-component\packages\components\src\dTableSearch\dTableSearch.ts
 */
export type ColumProps = {
  valueType?: string;
  label?: string;
  index?: (index: number) => void | number;
  columnKey?: string;
  prop: string;
  width?: string | number;
  minWidth?: string | number;
  defaultValue?: string | number | any[];
  fixed?: string | boolean;
  renderHeader?: (column: any, index: number) => void;
  sortable?: boolean | string;
  sortMethod?: (a: number, b: number) => number;
  checked?: boolean;
  slotName?: string;
  type?: string;
  search: boolean | Record<string, any>;
  hideInTable?: boolean;
  key?: string;
  fieldProps?: Record<string, any>;
};

export type CardProp = {
  shadow?: 'always' | 'never' | 'hover';
  header?: string;
  bodyStyle?: object;
  bodyClass?: string;
};

export type Responsive = {
  span?: number;
  offset?: number;
};
type Col = {
  offset?: number;
  span?: number;
  suffix?: boolean;
  xs?: Responsive;
  sm?: Responsive;
  md?: Responsive;
  lg?: Responsive;
  xl?: Responsive;
};
export type TableProp = {
  columns?: ColumProps[];
  request: (
    params: any,
    done: (res: {
      data: any[];
      total?: number;
      pageNum: number;
      pageSize: number;
    }) => void,
  ) => void;

  pagination?: any; //分页所有参数
  hasSearch?: boolean; //是否需要搜索
  hasPage?: boolean;
  more?: boolean;
  loadingParams?: {
    body?: boolean;
    fullscreen?: boolean;
    text?: string;
    background?: string;
  };
  isloading?: boolean;
  cardProp?: CardProp;
  tableProp?: any;
  initParam?: any;
  searchProp?: {
    searchCol?: Col;
    suffix?: boolean;
  };
};
