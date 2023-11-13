/*
 * @Date: 2023-10-30 13:26:08
 * @Auth: 463997479@qq.com
 * @LastEditors: 463997479@qq.com
 * @LastEditTime: 2023-11-09 16:18:09
 * @FilePath: \dc-component\packages\components\src\dTableSearch\dTableSearch.d.ts
 */
export type ColumProps = {
  type?: string;
  label: string;
  index?: (index: number) => void | number;
  columnKey?: string;
  prop: string;
  width?: string | number;

  minWidth?: string | number;
  fixed?: string | boolean;
  renderHeader?: (column: any, index: number) => void;
  sortable?: boolean | string;
  sortMethod?: (a: number, b: number) => number;
  checked?: boolean;
  slotName?: string;
};

export type CardProp = {
  shadow?: 'always' | 'never' | 'hover';
  header?: string;
  bodyStyle?: object;
  bodyClass?: string;
};

export type TableProp = {
  columns?: ColumProps[];
  request: (
    params: any,
    done: (res: {
      data: any[];
      total?: number;
      pageNum?: number;
      pageSize?: number;
    }) => void,
  ) => void;
  title?: string;

  pagination?: any; //分页所有参数
  hasSearch?: boolean; //是否需要搜索
  hasPage?: boolean;
  more?: boolean;
  searchFormProps?: any;
  loadingParams?: {
    body?: boolean;
    fullscreen?: boolean;
    text?: string;
    background?: string;
  };
  isloading?: boolean;
  cardProp?: CardProp;
};



