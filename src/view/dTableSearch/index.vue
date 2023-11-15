<!--
 * @Date: 2023-10-17 17:35:40
 * @Auth: 463997479@qq.com
 * @LastEditors: 463997479@qq.com
 * @LastEditTime: 2023-11-15 17:34:24
 * @FilePath: \dc-component\src\view\dTableSearch\index.vue
-->

<template>
  <d-table-search
    :columns="columns"
    :request="handleRequest"
    title="Card name"
    :header-cell-style="{
      background: '#f5f7fa',
    }"
    :pagination="{
      background: true,
      layout: 'total, sizes, prev, pager, next, jumper',
      small: 'small',
      pageSizes: [10, 20, 200, 300, 400],
      pageSize: 20,
      pageNum: 1,
    }"
    :tableProp="{}"
    empty-text="暂无数据"
    border
    :cardProp="{ shadow: 'always' }"
    :searchCol="{ xs: 1, sm: 2, md: 2, lg: 3, xl: 6 }"
  >
    <template #dTableRight>
      <el-button type="primary" class="button">Operation button</el-button>
      <el-button class="button">...</el-button>
    </template>

    <template #name="data">
      <div>{{ data.data.name }}</div>
    </template>
    <template #empty>
      <el-empty :image-size="100" />
    </template>
    <template #action="data">
      <el-button @click="handleClickDom" link type="primary"
        >operation add</el-button
      >
      <el-button link type="warning">peration edit</el-button>
    </template>
  </d-table-search>
</template>

<script lang="ts" setup>
import { DTableSearch } from 'dc-pro-component';
import {
  ElButton,
  ElInput,
  ElSpace,
  ElFormItem,
  ElEmpty,
  ElSelect,
} from 'element-plus';
import { onUnmounted, ref } from 'vue';
import { useLockDom } from 'dc-hooks';
import { h } from 'vue';
const filterHandler = (value, row, column) => {
  const property = column['property'];
  return row[property] === value;
};
const options = [
  {
    value: 'guide',
    label: 'Guide',
    children: [
      {
        value: 'disciplines',
        label: 'Disciplines',
        children: [
          {
            value: 'consistency',
            label: 'Consistency',
          },
          {
            value: 'feedback',
            label: 'Feedback',
          },
          {
            value: 'efficiency',
            label: 'Efficiency',
          },
          {
            value: 'controllability',
            label: 'Controllability',
          },
        ],
      },
      {
        value: 'navigation',
        label: 'Navigation',
        children: [
          {
            value: 'side nav',
            label: 'Side Navigation',
          },
          {
            value: 'top nav',
            label: 'Top Navigation',
          },
        ],
      },
    ],
  },
  {
    value: 'component',
    label: 'Component',
    children: [
      {
        value: 'basic',
        label: 'Basic',
        children: [
          {
            value: 'layout',
            label: 'Layout',
          },
          {
            value: 'color',
            label: 'Color',
          },
          {
            value: 'typography',
            label: 'Typography',
          },
          {
            value: 'icon',
            label: 'Icon',
          },
          {
            value: 'button',
            label: 'Button',
          },
        ],
      },
      {
        value: 'form',
        label: 'Form',
        children: [
          {
            value: 'radio',
            label: 'Radio',
          },
          {
            value: 'checkbox',
            label: 'Checkbox',
          },
          {
            value: 'input',
            label: 'Input',
          },
          {
            value: 'input-number',
            label: 'InputNumber',
          },
          {
            value: 'select',
            label: 'Select',
          },
          {
            value: 'cascader',
            label: 'Cascader',
          },
          {
            value: 'switch',
            label: 'Switch',
          },
          {
            value: 'slider',
            label: 'Slider',
          },
          {
            value: 'time-picker',
            label: 'TimePicker',
          },
          {
            value: 'date-picker',
            label: 'DatePicker',
          },
          {
            value: 'datetime-picker',
            label: 'DateTimePicker',
          },
          {
            value: 'upload',
            label: 'Upload',
          },
          {
            value: 'rate',
            label: 'Rate',
          },
          {
            value: 'form',
            label: 'Form',
          },
        ],
      },
      {
        value: 'data',
        label: 'Data',
        children: [
          {
            value: 'table',
            label: 'Table',
          },
          {
            value: 'tag',
            label: 'Tag',
          },
          {
            value: 'progress',
            label: 'Progress',
          },
          {
            value: 'tree',
            label: 'Tree',
          },
          {
            value: 'pagination',
            label: 'Pagination',
          },
          {
            value: 'badge',
            label: 'Badge',
          },
        ],
      },
      {
        value: 'notice',
        label: 'Notice',
        children: [
          {
            value: 'alert',
            label: 'Alert',
          },
          {
            value: 'loading',
            label: 'Loading',
          },
          {
            value: 'message',
            label: 'Message',
          },
          {
            value: 'message-box',
            label: 'MessageBox',
          },
          {
            value: 'notification',
            label: 'Notification',
          },
        ],
      },
      {
        value: 'navigation',
        label: 'Navigation',
        children: [
          {
            value: 'menu',
            label: 'Menu',
          },
          {
            value: 'tabs',
            label: 'Tabs',
          },
          {
            value: 'breadcrumb',
            label: 'Breadcrumb',
          },
          {
            value: 'dropdown',
            label: 'Dropdown',
          },
          {
            value: 'steps',
            label: 'Steps',
          },
        ],
      },
      {
        value: 'others',
        label: 'Others',
        children: [
          {
            value: 'dialog',
            label: 'Dialog',
          },
          {
            value: 'tooltip',
            label: 'Tooltip',
          },
          {
            value: 'popover',
            label: 'Popover',
          },
          {
            value: 'card',
            label: 'Card',
          },
          {
            value: 'carousel',
            label: 'Carousel',
          },
          {
            value: 'collapse',
            label: 'Collapse',
          },
        ],
      },
    ],
  },
  {
    value: 'resource',
    label: 'Resource',
    children: [
      {
        value: 'axure',
        label: 'Axure Components',
      },
      {
        value: 'sketch',
        label: 'Sketch Templates',
      },
      {
        value: 'docs',
        label: 'Design Documentation',
      },
    ],
  },
];
const columns = [
  {
    prop: 'name',
    label: 'name',
    slotName: 'name',
    search: false,
  },
  {
    label: 'name',
    slotName: 'name',
    valueType: 'ElInput',
    search: true,
    defaultValue: '',
    hideInTable: true,
    key: '_name',
    fieldProps: {
      placeholder: '请输入用户名',
    },
  },
  {
    label: 'casca',
    prop: 'casca',
    hideInTable: true,
    valueType: 'ElCascader',
    search: {
      transform: (val) => {
        return {
          a: val[0],
          b: val[1],
          c: val[2],
        };
      },
    },
    fieldProps: {
      placeholder: '请选择',
      options: options,
      label: 'label',
    },
  },
  {
    prop: 'date',
    label: 'date',
    filters: [
      { text: '2016-05-01', value: '2016-05-01' },
      { text: '2016-05-02', value: '2016-05-02' },
      { text: '2016-05-03', value: '2016-05-03' },
      { text: '2016-05-04', value: '2016-05-04' },
    ],
    sortable: true,

    filterMethod: filterHandler,
    valueType: 'ElDatePicker',
    search: true,
    fieldProps: {
      placeholder: '请选择',
      format: 'YYYY-MM-DD',
      valueFormat: 'YYYY-MM-DD',
      type: 'date',
    },
  },

  {
    prop: 'date1',
    label: 'date1',
    filters: [
      { text: '2016-05-01', value: '2016-05-01' },
      { text: '2016-05-02', value: '2016-05-02' },
      { text: '2016-05-03', value: '2016-05-03' },
      { text: '2016-05-04', value: '2016-05-04' },
    ],
    sortable: true,

    filterMethod: filterHandler,
    valueType: 'ElDatePicker',
    search: {
      transform: (val) => {
        return {
          starTime: val[0],
          emdTime: val[1],
        };
      },
    },
    fieldProps: {
      placeholder: '请选择',
      format: 'YYYY-MM-DD HH:mm:ss',
      dateFormat: 'YYYY/MM/DD ddd',
      timeFormat: 'A hh:mm:ss',
      valueFormat: 'YYYY-MM-DD HH:mm:ss',
      type: 'datetimerange',
      startPlaceholder: 'Start date',
      endPlaceholder: 'End date',
    },
  },
  {
    prop: 'address',
    label: 'address',
    valueType: 'ElSelect',
    search: true,
    fieldProps: {
      placeholder: '请选择',
      option: [
        {
          label: 'a',
          value: 'a',
        },
      ],
    },
  },
  {
    prop: '操作',
    label: '操作',
    slotName: 'action',
    width: 300,
  },
];
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
];

let timer = null;
const handleRequest = (params, done) => {
  //请求返回数据
  console.log(params);
  timer = setTimeout(() => {
    done({ data: tableData, total: 1000 });
  }, 2000);
};

const flag = ref<boolean>(false);
const handleClickDom = () => {
  flag.value = !flag.value;
  useLockDom(flag.value);
};
onUnmounted(() => {
  clearTimeout(timer);
});
</script>
