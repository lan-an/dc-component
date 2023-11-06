<!--
 * @Date: 2023-10-18 13:01:07
 * @Auth: 463997479@qq.com
 * @LastEditors: 463997479@qq.com
 * @LastEditTime: 2023-11-06 16:26:54
 * @FilePath: \dc-component\docs\component\dTableSearch.md
-->

# dTableSearch 表格搜索组件

表格搜索组件便捷式开发

## 基础用法

  <dTable class="vp-raw"></dTable>


::: details Show Code

```vue
<template>
  <DTableSearch
    :columns="columns"
    :request="handleRequest"
    :pagination="{
      background: true,
      layout: 'total, sizes, prev, pager, next, jumper',
      small: 'small',
      pageSizes: [10, 200, 300, 400],
    }"
    :hasSearch="true"
    title="Card name"
    :header-cell-style="{
      background: '#f5f7fa',
    }"
    border
    class="vp-raw"
  >
    <template #dTableRight>
      <el-button type="primary" class="button">Operation button</el-button>
      <el-button class="button">...</el-button>
    </template>
    <template #searchData="{ search }">
      <el-space>
        <el-form-item prop="name" label="Activity name">
          <el-input v-model="search.name" />
        </el-form-item>
      </el-space>
    </template>
    <template #name="data">
      <div>{{ data.data.name }}</div>
    </template>
    <template #action="data">
      <el-button link type="primary">operation add</el-button>
      <el-button link type="warning">peration edit</el-button>
    </template>
  </DTableSearch>
</template>
```

:::

## Attributes

| 参数          | 说明 | 类型   | 可选值                                           | 默认值  |
| ---- | ---- | ------ | ------------------------------------------------ | ------- |
| pagination | 分页配置 | object | pageSize:1/pageNum:1                           | - |
| hasSearch | 是否有搜索 | boolean | true                                          | true |
| hasPage |是否需要分页 | boolean |true                                            | true |
| more | 更多搜索 | boolean | true                                                 | true |
| searchFormProps | 搜索其余配置 | object | {}                                      |    -|
| loadingParams | loading | object | {} | {} |
| isloading | 是否需要加载 | boolean | true| true |

