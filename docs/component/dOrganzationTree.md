<!--
 * @Date: 2023-11-10 09:26:45
 * @Auth: 873768511@qq.com
 * @LastEditors: 873768511@qq.com
 * @LastEditTime: 2023-11-10 10:19:38
 * @FilePath: \dc-component\docs\component\dOrganzationTree.md
-->

# dOrganzationTree 组织树

组件便捷式开发

## 基础用法

  <dOrganzationTree></dOrganzationTree>




::: details Show Code

```vue
<template>
  <ElCard style="height:100%">
    <dOrganizationTree
      :treeContainer="{width:'100%'}"
      ref="treeRef"
      :treeData="treeData"
      v-bind="treeOption"
      :load="loadTree"
      empty-text="暂无数据"
      @loadTree="loadTree"
      @handleNodeClick="handleNodeClick"
      @handleSelected="handleSelected"
      @handSearch="handSearch"
    >
    </dOrganizationTree>
  </ElCard>
</template>
```

:::

## Attributes

| 参数 | 说明 | 类型  | 默认值  |
| ---- | ---- | ------ | ------------------- |
| treeData | 展示数据 | string | {} |
| isSearchable | 是否需要搜索 | boolean | true |
| treeContainer | 容器样式 | object | {} |
| ellipsisLimit | 文本省略 | boolean | true |
| isLazy | 是否懒加载 | Boolean | true |
| checkStrictly | 是否父子不关联 | Boolean | true |

## 插槽

| 插槽名 | 说明 |
|--------|------|
| `empty` | 当数据为空时自定义的内容 |

