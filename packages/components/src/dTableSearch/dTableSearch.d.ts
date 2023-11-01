/*
 * @Date: 2023-10-30 13:26:08
 * @Auth: 463997479@qq.com
 * @LastEditors: 463997479@qq.com
 * @LastEditTime: 2023-10-30 14:21:49
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
};
