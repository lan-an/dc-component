# dRelationGraph 关系图谱

关系图谱用于开始一个即时操作。

## 基础用法（示例一）

<script lang="ts" setup>
import { ref,nextTick } from 'vue' 
import { DRGData, RelationGraphInstance } from '@/components'
const graphData = ref<DRGData>()
const graphData2 = ref<DRGData>()
const graphData3 = ref<DRGData>()
const rgDom = ref<HTMLElement>()

const options = {
  defaultNodeBorderWidth: 0,
  defaultNodeColor: 'rgba(238, 178, 94, 1)',
  allowSwitchLineShape: true,
  allowSwitchJunctionPoint: true,
  defaultLineShape: 1,
  layouts: [
    {
      label: '中心',
      layoutName: 'center',
      layoutClassName: 'seeks-layout-center'
    }
    ],
  defaultJunctionPoint: 'border'
}

graphData.value = {
  type: 'json',
  data: {
    rootId: '2',
    nodes: [
      { id: '1', text: '节点-1', myicon: 'el-icon-star-on' },
      { id: '2', text: '节点-2', myicon: 'el-icon-setting' },
      { id: '3', text: '节点-3', myicon: 'el-icon-setting' },
      { id: '4', text: '节点-4', myicon: 'el-icon-star-on' },
      { id: '6', text: '节点-6', myicon: 'el-icon-setting' },
      { id: '7', text: '节点-7', myicon: 'el-icon-setting' },
      { id: '8', text: '节点-8', myicon: 'el-icon-star-on' },
      { id: '9', text: '节点-9', myicon: 'el-icon-headset' },
      { id: '71', text: '节点-71', myicon: 'el-icon-headset' },
      { id: '72', text: '节点-72', myicon: 'el-icon-s-tools' },
      { id: '73', text: '节点-73', myicon: 'el-icon-star-on' },
      { id: '81', text: '节点-81', myicon: 'el-icon-s-promotion' },
      { id: '82', text: '节点-82', myicon: 'el-icon-s-promotion' },
      { id: '83', text: '节点-83', myicon: 'el-icon-star-on' },
      { id: '84', text: '节点-84', myicon: 'el-icon-s-promotion' },
      { id: '85', text: '节点-85', myicon: 'el-icon-sunny' },
      { id: '91', text: '节点-91', myicon: 'el-icon-sunny' },
      { id: '92', text: '节点-82', myicon: 'el-icon-sunny' },
      { id: '51', text: '节点-51', myicon: 'el-icon-sunny' },
      { id: '52', text: '节点-52', myicon: 'el-icon-sunny' },
      { id: '53', text: '节点-53', myicon: 'el-icon-sunny' },
      { id: '54', text: '节点-54', myicon: 'el-icon-sunny' },
      { id: '55', text: '节点-55', myicon: 'el-icon-sunny' },
      { id: '5', text: '节点-5', myicon: 'el-icon-sunny' }
    ],
    lines: [
      { from: '7', to: '71', text: '投资' },
      { from: '7', to: '72', text: '投资' },
      { from: '7', to: '73', text: '投资' },
      { from: '8', to: '81', text: '投资' },
      { from: '8', to: '82', text: '投资' },
      { from: '8', to: '83', text: '投资' },
      { from: '8', to: '84', text: '投资' },
      { from: '8', to: '85', text: '投资' },
      { from: '9', to: '91', text: '投资' },
      { from: '9', to: '92', text: '投资' },
      { from: '5', to: '51', text: '投资1' },
      { from: '5', to: '52', text: '投资' },
      { from: '5', to: '53', text: '投资3' },
      { from: '5', to: '54', text: '投资4' },
      { from: '5', to: '55', text: '投资' },
      { from: '1', to: '2', text: '投资' },
      { from: '3', to: '1', text: '高管' },
      { from: '4', to: '2', text: '高管' },
      { from: '6', to: '2', text: '高管' },
      { from: '7', to: '2', text: '高管' },
      { from: '8', to: '2', text: '高管' },
      { from: '9', to: '2', text: '高管' },
      { from: '1', to: '5', text: '投资' }
    ]
  }
}

const options2 = {
  layouts: [
    {
      layoutLabel: '中心',
      layoutName: 'tree',
      centerOffset_x: -200,
      layoutClassName: 'seeks-layout-center',
      defaultJunctionPoint: 'border',
      defaultNodeShape: 0,
      defaultLineShape: 1,
      from: 'left',
      max_per_width: '300',
      min_per_height: '40'
    }
  ],
  defaultLineMarker: {
    markerWidth: 12,
    markerHeight: 12,
    refX: 6,
    refY: 6,
    data: 'M2,2 L10,6 L2,10 L6,6 L2,2'
  },
  moveToCenterWhenRefresh: false,
  defaultExpandHolderPosition: 'right',
  defaultNodeShape: 1,
  defaultNodeWidth: '100',
  defaultLineShape: 4,
  defaultJunctionPoint: 'lr',
  defaultNodeBorderWidth: 0,
  defaultLineColor: 'rgba(0, 186, 189, 1)',
  defaultNodeColor: 'rgba(0, 206, 209, 1)'
}

const options3 =  {
  layouts: [
    {
      label: '中心',
      layoutName: 'tree',
      layoutClassName: 'seeks-layout-center',
      defaultJunctionPoint: 'border',
      defaultNodeShape: 0,
      defaultLineShape: 1,
      max_per_height: '60',
      levelDistance: '200,400,200',
      centerOffset_x: 0,
      centerOffset_y: 0,
      from: 'left'
    }
  ],
  defaultNodeBorderWidth: 0,
  defaultNodeShape: 1,
  allowShowMiniNameFilter: false,
  useAnimationWhenRefresh: false,
  defaultJunctionPoint: 'lr',
  defaultLineShape: 2
}

graphData2.value = {
  type: 'json',
  data: {
    rootId: 'a',
    nodes: [
      { id: 'a', text: 'a' },
      { id: 'b', text: 'b-固定数据展开/关闭' },
      { id: 'b1', text: 'b1' },
      { id: 'b1-1', text: 'b1-1' },
      { id: 'b1-2', text: 'b1-2' },
      { id: 'b1-3', text: 'b1-3' },
      { id: 'b1-4', text: 'b1-4' },
      { id: 'b1-5', text: 'b1-5' },
      { id: 'b1-6', text: 'b1-6' },
      { id: 'b2', text: 'b2' },
      { id: 'b2-1', text: 'b2-1' },
      { id: 'b2-2', text: 'b2-2' },
      { id: 'c', text: 'c-动态数据展开/关闭' },
      { id: 'c1', text: 'c1-动态获取子节点', expandHolderPosition: 'right', expanded: false, data: { isNeedLoadDataFromRemoteServer: true, childrenLoaded: false }},
      { id: 'c2', text: 'c2-动态获取子节点', expandHolderPosition: 'right', expanded: false, data: { isNeedLoadDataFromRemoteServer: true, childrenLoaded: false }},
      { id: 'c3', text: 'c3-动态获取子节点', expandHolderPosition: 'right', expanded: false, data: { isNeedLoadDataFromRemoteServer: true, childrenLoaded: false }}],
    lines: [
      { from: 'a', to: 'b' },
      { from: 'b', to: 'b1' },
      { from: 'b1', to: 'b1-1' },
      { from: 'b1', to: 'b1-2' },
      { from: 'b1', to: 'b1-3' },
      { from: 'b1', to: 'b1-4' },
      { from: 'b1', to: 'b1-5' },
      { from: 'b1', to: 'b1-6' },
      { from: 'b', to: 'b2' },
      { from: 'b2', to: 'b2-1' },
      { from: 'b2', to: 'b2-2' },
      { from: 'a', to: 'c' },
      { from: 'c', to: 'c1' },
      { from: 'c', to: 'c2' },
      { from: 'c', to: 'c3' }
    ]
  }
}

graphData3.value = {
  type: 'json',
  data: {
    nodes: [
      { text: '采集管理中心', id: 'centre', nodeShape: 0, width: 120, height: 120, offset_y: -20, color: '#34A0CE' },
      { text: '程序调度服务', id: 'cron', nodeShape: 1, width: 130, height: 40, color: '#34A0CE' },
      { text: 'ExeSvr-01@10.0.0.201 | 最后响应：3秒前', id: 'exe-01', nodeShape: 1, width: 400, height: 35 },
      { text: 'ExeSvr-02@10.0.0.202 | 最后响应：5秒前', id: 'exe-02', nodeShape: 1, width: 400, height: 35 },
      { text: 'ExeSvr-03@10.0.0.203 | 最后响应：2秒前', id: 'exe-03', nodeShape: 1, width: 400, height: 35 },
      { text: 'ExeSvr-04@10.0.0.204 | 最后响应：4分钟前', id: 'exe-04', nodeShape: 1, width: 400, height: 35, color: '#34A0CE' },
      { text: 'ExeSvr-05@10.0.0.205 | 最后响应：2分钟前', id: 'exe-05', nodeShape: 1, width: 400, height: 35, color: '#34A0CE' },
      { text: 'ExeSvr-06@10.0.0.206 | 最后响应：3秒前', id: 'exe-06', nodeShape: 1, width: 400, height: 35 },
      { text: 'ExeSvr-07@10.0.0.207 | 最后响应：3秒前', id: 'exe-07', nodeShape: 1, width: 400, height: 35 },
      { text: 'ExeSvr-docker-01@10.0.0.211 | 最后响应：17天前', id: 'exe-08', nodeShape: 1, width: 400, height: 35, color: '#F56C6C' },
      { text: 'ExeSvr-docker-02@10.0.0.211 | 最后响应：3秒前', id: 'exe-09', nodeShape: 1, width: 400, height: 35 },
      { text: 'ExeSvr-docker-03@10.0.0.211 | 最后响应：3秒前', id: 'exe-10', nodeShape: 1, width: 400, height: 35 }
    ],
    lines: [
      { from: 'centre', to: 'cron', text: null, isHideArrow: true },
      { from: 'cron', to: 'exe-01', text: null },
      { from: 'cron', to: 'exe-02', text: null },
      { from: 'cron', to: 'exe-03', text: null },
      { from: 'cron', to: 'exe-04', text: null },
      { from: 'cron', to: 'exe-05', text: null },
      { from: 'cron', to: 'exe-06', text: null },
      { from: 'cron', to: 'exe-07', text: null },
      { from: 'cron', to: 'exe-08', text: null },
      { from: 'cron', to: 'exe-09', text: null },
      { from: 'cron', to: 'exe-10', text: null }
    ]
  }
}




const drawComplete = ()=> {
  console.log(rgDom.value?.getNodes())
}
</script>

<d-relation-graph :options="options" :width="690" :height="500" :graphData="graphData" ref="rgDom" @drawComplete="drawComplete"></d-relation-graph>

::: details Show Code

```vue
<template>
  <d-relation-graph :options="options" :width="690" :height="500" :graphData="graphData" ref="rgDom" @drawComplete="drawComplete"></d-relation-graph>
</template>

<script lang="ts" setup>
import { ref,nextTick } from 'vue' 
import { DRGData, RelationGraphInstance } from '@/components'
const graphData = ref<DRGData>()
const rgDom = ref<HTMLElement>()

const options = {
  defaultNodeBorderWidth: 0,
  defaultNodeColor: 'rgba(238, 178, 94, 1)',
  allowSwitchLineShape: true,
  allowSwitchJunctionPoint: true,
  defaultLineShape: 1,
  layouts: [
    {
      label: '中心',
      layoutName: 'center',
      layoutClassName: 'seeks-layout-center'
    }
    ],
  defaultJunctionPoint: 'border'
}

graphData.value = {
  type: 'json',
  data: {
    rootId: '2',
    nodes: [
      { id: '1', text: '节点-1', myicon: 'el-icon-star-on' },
      { id: '2', text: '节点-2', myicon: 'el-icon-setting' },
      { id: '3', text: '节点-3', myicon: 'el-icon-setting' },
      { id: '4', text: '节点-4', myicon: 'el-icon-star-on' },
      { id: '6', text: '节点-6', myicon: 'el-icon-setting' },
      { id: '7', text: '节点-7', myicon: 'el-icon-setting' },
      { id: '8', text: '节点-8', myicon: 'el-icon-star-on' },
      { id: '9', text: '节点-9', myicon: 'el-icon-headset' },
      { id: '71', text: '节点-71', myicon: 'el-icon-headset' },
      { id: '72', text: '节点-72', myicon: 'el-icon-s-tools' },
      { id: '73', text: '节点-73', myicon: 'el-icon-star-on' },
      { id: '81', text: '节点-81', myicon: 'el-icon-s-promotion' },
      { id: '82', text: '节点-82', myicon: 'el-icon-s-promotion' },
      { id: '83', text: '节点-83', myicon: 'el-icon-star-on' },
      { id: '84', text: '节点-84', myicon: 'el-icon-s-promotion' },
      { id: '85', text: '节点-85', myicon: 'el-icon-sunny' },
      { id: '91', text: '节点-91', myicon: 'el-icon-sunny' },
      { id: '92', text: '节点-82', myicon: 'el-icon-sunny' },
      { id: '51', text: '节点-51', myicon: 'el-icon-sunny' },
      { id: '52', text: '节点-52', myicon: 'el-icon-sunny' },
      { id: '53', text: '节点-53', myicon: 'el-icon-sunny' },
      { id: '54', text: '节点-54', myicon: 'el-icon-sunny' },
      { id: '55', text: '节点-55', myicon: 'el-icon-sunny' },
      { id: '5', text: '节点-5', myicon: 'el-icon-sunny' }
    ],
    lines: [
      { from: '7', to: '71', text: '投资' },
      { from: '7', to: '72', text: '投资' },
      { from: '7', to: '73', text: '投资' },
      { from: '8', to: '81', text: '投资' },
      { from: '8', to: '82', text: '投资' },
      { from: '8', to: '83', text: '投资' },
      { from: '8', to: '84', text: '投资' },
      { from: '8', to: '85', text: '投资' },
      { from: '9', to: '91', text: '投资' },
      { from: '9', to: '92', text: '投资' },
      { from: '5', to: '51', text: '投资1' },
      { from: '5', to: '52', text: '投资' },
      { from: '5', to: '53', text: '投资3' },
      { from: '5', to: '54', text: '投资4' },
      { from: '5', to: '55', text: '投资' },
      { from: '1', to: '2', text: '投资' },
      { from: '3', to: '1', text: '高管' },
      { from: '4', to: '2', text: '高管' },
      { from: '6', to: '2', text: '高管' },
      { from: '7', to: '2', text: '高管' },
      { from: '8', to: '2', text: '高管' },
      { from: '9', to: '2', text: '高管' },
      { from: '1', to: '5', text: '投资' }
    ]
  }
}
const drawComplete = ()=> {
  console.log(rgDom.value?.getNodes())
}
</script>
:::

## 基础用法（示例二）
<d-relation-graph :options="options2" :width="690" :height="500" :graphData="graphData2" ref="rgDom" @drawComplete="drawComplete"></d-relation-graph>
::: details Show Code
```vue
<template>
  <d-relation-graph :options="options" :width="690" :height="500" :graphData="graphData" ref="rgDom" @drawComplete="drawComplete"></d-relation-graph>
</template>

<script lang="ts" setup>
import { ref,nextTick } from 'vue' 
import { DRGData, RelationGraphInstance } from '@/components'
const graphData = ref<DRGData>()
const rgDom = ref<HTMLElement>()

const options = {
  layouts: [
    {
      label: '中心',
      layoutName: 'tree',
      layoutClassName: 'seeks-layout-center',
      defaultJunctionPoint: 'border',
      defaultNodeShape: 0,
      defaultLineShape: 1,
      from: 'left',
      max_per_width: '300',
      min_per_height: '40'
    }
  ],
  defaultLineMarker: {
    markerWidth: 12,
    markerHeight: 12,
    refX: 6,
    refY: 6,
    data: 'M2,2 L10,6 L2,10 L6,6 L2,2'
  },
  moveToCenterWhenRefresh: false,
  defaultExpandHolderPosition: 'right',
  defaultNodeShape: 1,
  defaultNodeWidth: '100',
  defaultLineShape: 4,
  defaultJunctionPoint: 'lr',
  defaultNodeBorderWidth: 0,
  defaultLineColor: 'rgba(0, 186, 189, 1)',
  defaultNodeColor: 'rgba(0, 206, 209, 1)'
}

graphData.value = {
  type: 'json',
  data: {
    rootId: 'a',
    nodes: [
      { id: 'a', text: 'a' },
      { id: 'b', text: 'b-固定数据展开/关闭' },
      { id: 'b1', text: 'b1' },
      { id: 'b1-1', text: 'b1-1' },
      { id: 'b1-2', text: 'b1-2' },
      { id: 'b1-3', text: 'b1-3' },
      { id: 'b1-4', text: 'b1-4' },
      { id: 'b1-5', text: 'b1-5' },
      { id: 'b1-6', text: 'b1-6' },
      { id: 'b2', text: 'b2' },
      { id: 'b2-1', text: 'b2-1' },
      { id: 'b2-2', text: 'b2-2' },
      { id: 'c', text: 'c-动态数据展开/关闭' },
      { id: 'c1', text: 'c1-动态获取子节点', expandHolderPosition: 'right', expanded: false, data: { isNeedLoadDataFromRemoteServer: true, childrenLoaded: false }},
      { id: 'c2', text: 'c2-动态获取子节点', expandHolderPosition: 'right', expanded: false, data: { isNeedLoadDataFromRemoteServer: true, childrenLoaded: false }},
      { id: 'c3', text: 'c3-动态获取子节点', expandHolderPosition: 'right', expanded: false, data: { isNeedLoadDataFromRemoteServer: true, childrenLoaded: false }}],
    lines: [
      { from: 'a', to: 'b' },
      { from: 'b', to: 'b1' },
      { from: 'b1', to: 'b1-1' },
      { from: 'b1', to: 'b1-2' },
      { from: 'b1', to: 'b1-3' },
      { from: 'b1', to: 'b1-4' },
      { from: 'b1', to: 'b1-5' },
      { from: 'b1', to: 'b1-6' },
      { from: 'b', to: 'b2' },
      { from: 'b2', to: 'b2-1' },
      { from: 'b2', to: 'b2-2' },
      { from: 'a', to: 'c' },
      { from: 'c', to: 'c1' },
      { from: 'c', to: 'c2' },
      { from: 'c', to: 'c3' }
    ]
  }
}
const drawComplete = ()=> {
  console.log(rgDom.value?.getNodes())
}
</script>
:::

## 基础用法（示例三）
<d-relation-graph :options="options3" :width="690" :height="500" :graphData="graphData3" ref="rgDom" @drawComplete="drawComplete"></d-relation-graph>
::: details Show Code
```vue
<template>
  <d-relation-graph :options="options" :width="690" :height="500" :graphData="graphData" ref="rgDom" @drawComplete="drawComplete"></d-relation-graph>
</template>

<script lang="ts" setup>
import { ref,nextTick } from 'vue' 
import { DRGData, RelationGraphInstance } from '@/components'
const graphData = ref<DRGData>()
const rgDom = ref<HTMLElement>()

const options = {
  layouts: [
    {
      label: '中心',
      layoutName: 'tree',
      layoutClassName: 'seeks-layout-center',
      defaultJunctionPoint: 'border',
      defaultNodeShape: 0,
      defaultLineShape: 1,
      max_per_height: '60',
      levelDistance: '200,400,200',
      centerOffset_x: 0,
      centerOffset_y: 0,
      from: 'left'
    }
  ],
  defaultNodeBorderWidth: 0,
  defaultNodeShape: 1,
  allowShowMiniNameFilter: false,
  useAnimationWhenRefresh: false,
  defaultJunctionPoint: 'lr',
  defaultLineShape: 2
}

graphData.value = {
  type: 'json',
  data: {
    nodes: [
      { text: '采集管理中心', id: 'centre', nodeShape: 0, width: 120, height: 120, offset_y: -20, color: '#34A0CE' },
      { text: '程序调度服务', id: 'cron', nodeShape: 1, width: 130, height: 40, color: '#34A0CE' },
      { text: 'ExeSvr-01@10.0.0.201 | 最后响应：3秒前', id: 'exe-01', nodeShape: 1, width: 400, height: 35 },
      { text: 'ExeSvr-02@10.0.0.202 | 最后响应：5秒前', id: 'exe-02', nodeShape: 1, width: 400, height: 35 },
      { text: 'ExeSvr-03@10.0.0.203 | 最后响应：2秒前', id: 'exe-03', nodeShape: 1, width: 400, height: 35 },
      { text: 'ExeSvr-04@10.0.0.204 | 最后响应：4分钟前', id: 'exe-04', nodeShape: 1, width: 400, height: 35, color: '#34A0CE' },
      { text: 'ExeSvr-05@10.0.0.205 | 最后响应：2分钟前', id: 'exe-05', nodeShape: 1, width: 400, height: 35, color: '#34A0CE' },
      { text: 'ExeSvr-06@10.0.0.206 | 最后响应：3秒前', id: 'exe-06', nodeShape: 1, width: 400, height: 35 },
      { text: 'ExeSvr-07@10.0.0.207 | 最后响应：3秒前', id: 'exe-07', nodeShape: 1, width: 400, height: 35 },
      { text: 'ExeSvr-docker-01@10.0.0.211 | 最后响应：17天前', id: 'exe-08', nodeShape: 1, width: 400, height: 35, color: '#F56C6C' },
      { text: 'ExeSvr-docker-02@10.0.0.211 | 最后响应：3秒前', id: 'exe-09', nodeShape: 1, width: 400, height: 35 },
      { text: 'ExeSvr-docker-03@10.0.0.211 | 最后响应：3秒前', id: 'exe-10', nodeShape: 1, width: 400, height: 35 }
    ],
    lines: [
      { from: 'centre', to: 'cron', text: null, isHideArrow: true },
      { from: 'cron', to: 'exe-01', text: null },
      { from: 'cron', to: 'exe-02', text: null },
      { from: 'cron', to: 'exe-03', text: null },
      { from: 'cron', to: 'exe-04', text: null },
      { from: 'cron', to: 'exe-05', text: null },
      { from: 'cron', to: 'exe-06', text: null },
      { from: 'cron', to: 'exe-07', text: null },
      { from: 'cron', to: 'exe-08', text: null },
      { from: 'cron', to: 'exe-09', text: null },
      { from: 'cron', to: 'exe-10', text: null }
    ]
  }
}
const drawComplete = ()=> {
  console.log(rgDom.value?.getNodes())
}
</script>
:::


## 图谱的选项、Layout布局、方法、事件、插槽： 
### Arributes / 选项: 

| 参数                                | 说明                                                                                                                                                                                                 | 类型/传参 | 必选 | 默认值  |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---- | ------- |
| width                               | 图谱配置，图谱画布宽度                                                                                                                                                                               | number    | N    | 父级元素100%     |
| height                              | 图谱配置，图谱画布高度                                                                                                                                                                               | number    | N    | 父级元素100%     |
| options                             | 图谱配置，一个对象，里面包含了具体的选项：                                                                                                                                                           | Object    | Y    |         |
| options.debug                       | 是否开始调试模式，调试模式下会在控制台打印额外的日志信息                                                                                                                                             | boolean   | N    | false   |
| options.showDebugPanel              | 是否显示调试按钮，通过此按钮可以打印配置、数据等                                                                                                                                                     | boolean   | N    | false   |
| options.backgroundColor             | 图谱背景颜色，你也可以通过样式穿透来设置                                                                                                                                                             | string    | N    |         |
| options.backgroundImage             | 图谱水印url                                                                                                                                                                                          | string    | N    |         |
| options.backgroundImageNoRepeat     | 只在右下角显示水印，不重复显示水印                                                                                                                                                                   | boolean   | N    | true    |
| options.allowShowMiniToolBar        | 是否显示工具栏                                                                                                                                                                                       | boolean   | N    | true    |
| options.allowSwitchLineShape        | 是否在工具栏中显示切换线条形状的按钮                                                                                                                                                                 | boolean   | N    | true    |
| options.allowSwitchJunctionPoint    | 是否在工具栏中显示切换连接点位置的按钮                                                                                                                                                               | boolean   | N    | false   |
| options.allowAutoLayoutIfSupport    | 是否在工具栏中显示【自动布局】按钮（只有在布局支持且此选项为true时才会显示的按钮）                                                                                                                   | boolean   | N    | true    |
| options.allowShowRefreshButton      | 是否在工具栏中显示【刷新】按钮                                                                                                                                                                       | boolean   | N    | true    |
| options.allowShowDownloadButton     | 是否在工具栏中显示【下载图片】按钮                                                                                                                                                                   | boolean   | N    | true    |
| options.downloadImageFileName       | 下载图片时，图片的名称                                                                                                                                                                               | string    | N    | Random  |
| options.disableZoom                 | 是否禁用图谱的缩放功能                                                                                                                                                                               | boolean   | N    | false   |
| options.disableDragNode             | 是否禁用图谱中节点的拖动                                                                                                                                                                             | boolean   | N    | false   |
| options.disableNodeClickEffect      | 是否禁用节点默认的点击效果（选中、闪烁）                                                                                                                                                             | boolean   | N    | false   |
| options.disableLineClickEffect      | 是否禁用线条默认的点击效果（选中、闪烁）                                                                                                                                                             | boolean   | N    | false   |
| options.moveToCenterWhenRefresh     | 当图谱刷新后（调用setJsonData或refresh方法都会触发），让图谱根据节点居中（图片会默认将根节点作为中心展示，此选项会根据节点分布寻找中心）                                                             | boolean   | N    | false   |
| options.zoomToFitWhenRefresh        | 当图谱刷新后（调用setJsonData或refresh方法都会触发），是否让图谱缩放到适合可见区域大小，此选项不适用于fixed和force布局                                                                               | boolean   | N    | true    |
| options.useAnimationWhenRefresh     | 当图谱刷新后（调用setJsonData或refresh方法都会触发），使用动画让图居中、缩放                                                                                                                         | boolean   | N    | false   |
| options.defaultFocusRootNode        | 默认为根节点添加一个被选中的样式                                                                                                                                                                     | boolean   | N    | true    |
| options.allowShowZoomMenu           | 否在右侧菜单栏显示放大缩小的按钮，此设置和disableZoom不冲突                                                                                                                                          | boolean   | N    | true    |
| options.placeSingleNode             | 自动为孤点分配位置（当孤点设置了fixed=true时则不处理）                                                                                                                                               | boolean   | N    | true    |
| options.placeOtherGroup             | 支持展示多个关系网，默认只展示主关系网（即根节点所在的关系网），开启此选项，可以为所有关系网分配位置                                                                                                 | boolean   | N    | true    |
| options.isMoveByParentNode          | 是否在拖动节点后让子节点跟随                                                                                                                                                                         | boolean   | N    | false   |
| options.hideNodeContentByZoom       | 是否根据缩放比例隐藏节点内容                                                                                                                                                                         | boolean   | N    | false   |
| options.defaultNodeShape            | 默认的节点形状，0:圆形；1:矩形                                                                                                                                                                       | number    | N    | 1       |
| options.defaultNodeColor            | 默认的节点背景颜色                                                                                                                                                                                   | string    | N    |         |
| options.defaultNodeBorderColor      | 默认的节点边框颜色                                                                                                                                                                                   | string    | N    |         |
| options.defaultNodeWidth            | 节点的默认宽度                                                                                                                                                                                       | number    | N    |         |
| options.defaultNodeHeight           | 节点的默认高度                                                                                                                                                                                       | number    | N    |         |
| options.defaultJunctionPoint        | 默认的连线与节点接触的方式（border:边缘/ltrb:上下左右/tb:上下/lr:左右）当布局为树状布局时应使用tb或者lr，这样才会好看                                                                                | string    | N    | -       |
| options.defaultExpandHolderPosition | 默认的节点展开/关闭按钮位置（left/top/right/bottom）                                                                                                                                                 | string    | N    | hide    |
| options.defaultLineColor            | 默认的线条颜色                                                                                                                                                                                       | string    | N    |         |
| options.checkedLineColor            | 当线条被选中时的颜色                                                                                                                                                                                 | string    | N    | #FD8B37 |
| options.defaultLineWidth            | 默认的线条粗细（像素）                                                                                                                                                                               | number    | N    | 1       |
| options.defaultLineShape            | 默认的线条样式（1:直线/2:样式2/3:样式3/4:折线/5:样式5/6:样式6）使用示例                                                                                                                              | number    | N    |         |
| options.defaultLineMarker           | 默认的线条箭头样式，示例参考：配置工具中的选项：连线箭头样式                                                                                                                                         | Object    | N    |         |
| options.defaultShowLineLabel        | 默认是否显示连线文字，v2版本此选项已无效，主要是这个选项没什么用                                                                                                                                     | boolean   | N    | true    |
| options.graphOffset_x               | 画布整体的x偏移量，此属性相当于正常布局完成后又将画布水平拖动x像素，注意：画布整体的偏移量，此属性相当于正常布局完成后又将画布拖动一些距离，他不会更改节点的坐标，偏移的效果也不会受到其他因素影响。 | number    | N    | 0       |
| options.graphOffset_y               | 画布整体的y偏移量，此属性相当于正常布局完成后又将画布垂直拖动y像素，注意：画布整体的偏移量，此属性相当于正常布局完成后又将画布拖动一些距离，他不会更改节点的坐标，偏移的效果也不会受到其他因素影响。 | number    | N    | 0       |
| options.layout                      | 布局方式，布局配置详情参考Layout布局                                                                                                                                                                 | Object    | N    | center  |

### Layout 布局
#### 所有布局都具有的选项: 

| 参数            | 说明                                                                                                                                                                             | 类型/传参 | 必选 | 默认值 |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---- | ------ |
| layoutLabel     | 布局描述（如果有多个布局可以切换，此属性将作为布局名称显示）                                                                                                                     | string    | Y    |        |
| layoutName      | 布局方式（tree树状布局/center中心布局/force自动布局）                                                                                                                            | string    | Y    | center |
| layoutClassName | 当使用这个布局时，会将此样式添加到图谱上                                                                                                                                         | string    | N    | 1      |
| centerOffset_x  | 布局中心x坐标偏移量，注意：centerOffset会影响布局中所有节点的坐标数值，要让布局中心偏移量生效，你需要设置moveToCenterWhenRefresh=false，否则即使节点坐标偏移了，也会显示在中央。 | number    | N    | 0      |
| centerOffset_y  | 布局中心y坐标偏移量，注意：centerOffset会影响布局中所有节点的坐标数值，要让布局中心偏移量生效，你需要设置moveToCenterWhenRefresh=false，否则即使节点坐标偏移了，也会显示在中央。 | number    | N    | 0      |

#### tree / 树状布局 特有的选项: 
| 参数           | 说明                                                                            | 类型/传参 | 必选 | 默认值 |
| -------------- | ------------------------------------------------------------------------------- | --------- | ---- | ------ |
| from           | left:从左到右/top:从上到下/right:从右到左/bottom:从下到上                       | string    | N    | left   |
| min_per_width  | 节点距离限制:节点之间横向距离最小值（距离只节点中心之间的距离）                 | number    | N    |        |
| max_per_width  | 节点距离限制:节点之间横向距离最大值（距离只节点中心之间的距离）                 | number    | N    |        |
| min_per_height | 节点距离限制:节点之间纵向距离最小值（距离只节点中心之间的距离）                 | number    | N    |        |
| max_per_height | 节点距离限制:节点之间纵向距离最大值（距离只节点中心之间的距离）                 | number    | N    |        |
| levelDistance  | 分别设置每一层的高度，例如：100,200,300,200，此设置优先级高于"节点距离限制"选项 | string    | N    |        |

#### center / 中心布局 特有的选项: 
| 参数                 | 说明                                                                                            | 类型/传参 | 必选 | 默认值 |
| -------------------- | ----------------------------------------------------------------------------------------------- | --------- | ---- | ------ |
| distance_coefficient | 层级距离系数，默认为1，可以为小数，用于调节中心布局不同层级之间的距离，实现连线比较长的视觉效果 | number    | N    | left   |

#### force / 力学自动布局 特有的选项: 
| 参数                 | 说明                                                                                                                       | 类型/传参 | 必选 | 默认值 |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------- | --------- | ---- | ------ |
| maxLayoutTimes       | 最大布局次数，一般情况下布局几十次以后节点位置会稳定下来，一直布局有些费电，不环保。如果一定需要布局更久，可以将这个值改大 | number    | N    | 300    |
| force_node_repulsion | 节点之间的斥力系数，合理取值范围在0.2到3之间                                                                               | number    | N    | 1      |
| force_line_elastic   | 连线的牵引力系数，合理取值范围在0.2到3之间                                                                                 | number    | N    | 1      |



### Methods / 方法: 
| 参数                               | 说明                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| getInstance()                      | 获取图谱实例，实例中会包含一些实用方法，可以通过ref来获取。                                                                                                                                                                                                                                                                                                                                                 |
| setOptions(options, callback)      | 设置/重新设置图谱的选项,options：图谱选项,不能为空;callback:当设置完成后的回调函数,可以为空;options选项设置方法示例： 更改设置：ref.setOptions(newOptions, callback);                                                                                                                                                                                                                                       |
| setJsonData(jsonData, callback)    | 设置/重新设置图谱中的数据,jsonData：图谱数据,不能为空，jsonData中需要包含三要素（rootId、nodes、links）数据格式示例;callback:当设置完成后的回调函数,可以为空;                                                                                                                                                                                                                                               |
| appendJsonData(jsonData, callback) | 向图谱中追加数据,jsonData：图谱数据,不能为空，数据格式示例;callback:当设置完成后的回调函数,可以为空;                                                                                                                                                                                                                                                                                                        |
| refresh()                          | 刷新布局，你可以通过getNodes()获取当前图谱中的节点，并通过节点的isHide属性隐藏一些节点，再调用refresh()方法可以根据依然显示的节点重新布局图谱;或者在动态向图谱中添加数据候刷新布局;当你的图片默认默认状态是不可见的时，在切换到可见状态下后可能会显示不正常，这时你调用一下refresh()方法可以让图片正确显示。总之一句话：当图谱中的节点看起来不正常时，你都可以调用refresh方法来让布局器重新为节点分配位置。 |
| onGraphResize()                    | 当用于展示图谱的div容器大小发生变化时，可以调用此方法来让图谱各个部件展示到正确位置;                                                                                                                                                                                                                                                                                                                        |
| focusRootNode()                    | 定位到图谱的根节点居中并选中;                                                                                                                                                                                                                                                                                                                                                                               |
| focusNodeById(nodeId)              | 根据节点id在图谱中选中该节点并居中;                                                                                                                                                                                                                                                                                                                                                                         |
| getNodeById(nodeId)                | 根据节点id获取节点对象;                                                                                                                                                                                                                                                                                                                                                                                     |
| removeNodeById(nodeId)             | 移除指定id对应的节点，彻底移除，移除element和数据对象;                                                                                                                                                                                                                                                                                                                                                      |
| downloadAsImage(format, fileName)  | 下载图片，将当前图谱导出为图片，format可以为：png/jpg，默认为png;fileName为下载图片的文件名，此方法需要通过getInstance()获取实例调用：ref.getInstance().downloadAsImage(a,b)                                                                                                                                                                                                                                |
| getNodes()                         | 获取图谱中所有的节点对象，可以直接修改该对象的属性，这些对象不能用于JSON序列化;                                                                                                                                                                                                                                                                                                                             |
| getLinks()                         | 获取图谱中所有的关系对象                                                                                                                                                                                                                                                                                                                                                                                    |
| getGraphJsonData()                 | 获取当前图谱的节点、关系数据的json数据;                                                                                                                                                                                                                                                                                                                                                                     |
| getGraphJsonOptions()              | 获取当前图谱的完整的配置信息;                                                                                                                                                                                                                                                                                                                                                                               |
| dataUpdated()                      | 有时候在更改数据后视图并没有同步（比如直接修改对象属性更改了线条color属性值后，但图谱上的线条颜色没有变化时），可以调用此方法;                                                                                                                                                                                                                                                                              |


### Events / 事件: 
| 参数            | 说明                                                                                                                                                                                             | 说类型/传参明                    |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- |
| onNodeClick     | 点击节点事件，注意：请使用\<graph :on-node-click=functionName />的方式来绑定节点事件,                                                                                                            | (nodeObject, $event)             |
| onNodeExpand    | 展开节点事件，仅当节点的【展开/收缩】按钮可用时有效，注意：请使用 \<graph :on-node-expand=functionName />                                                                                        | (nodeObject, $event)             |
| onNodeCollapse  | 收缩节点事件，仅当节点的【展开/收缩】按钮可用时有效，注意：请使用 \<graph :on-node-collapse=functionName/>                                                                                       | (nodeObject, $event)             |
| onLineClick     | 点击线条事件，注意：请使用  \<graph :on-line-click=functionName/>                                                                                                                                | (lineObject, linkObject, $event) |
| onImageDownload | 当点击下载图片按钮时触发，可通过此事件接收到一个图谱的dom对象，你可以根据此对象来生成图片，如果要阻止默认的下载动作，此方法需要返回false。注意：请使用 \<graph :on-image-download=functionName/> | (cavansDom, $event)              |
| onNodeDragEnd   | 当节点拖动结束时                                                                                                                                                                                 | (nodeObject, $event)             |
| onCanvasDragEnd | 当画布拖动结束时                                                                                                                                                                                 | ($event)                         |
| onContextmenu   | 当在图谱中点击右键时                                                                                                                                                                             | ($event)                         | ($event, objectType:canvas | node | link | line, object:Node | Link | Line | undefined) |
| onCanvasClick   | 画布被点击时                                                                                                                                                                                     | ($event)                         |


### Slots / 插槽: 
| 参数          | 说明                                                                                                                     | 说类型/传参明     |
| ------------- | ------------------------------------------------------------------------------------------------------------------------ | ----------------- |
| node          | 自定义节点内容的插槽，通过此功能可以完全自定义节点的样式，实现图片节点、闪烁节点等等你想要的效果。                       | \{node\}          |
| line          | 自定义连线内容的插槽，通过此功能可以完全自定义连线的样式，实现自定义样式线条、自定义连线文字位置等等你想要的效果。       | \{line\}          |
| graph-plug    | 自定义图谱区域内容的插槽，通过此功能可以在图谱中显示一些内容，比如筛选区域，图例说明等。                                 | \{relationGraph\} |
| onCanvasClick | 自定义图谱画布区域内容的插槽，通过此功能可以在画布中显示一些内容，这些内容会和节点、线条一样可以被缩放、根据画布被拖动。 | \{relationGraph\} |

## 数据配置： Node 节点 、Link 关系 & Line 线条: 
### Node 节点Arributes / 选项: 

| 参数                      | 说明                                                                                                                                                                                       | 类型/传参 | 必选 | 默认值 |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---- | ------ |
| id                        | 节点id，不能重复，重复会被忽略                                                                                                                                                             | string    | Y    |        |
| text                      | 节点名称                                                                                                                                                                                   | string    | Y    |        |
| styleClass                | 节点样式class                                                                                                                                                                              | string    | N    |        |
| color                     | 节点背景颜色                                                                                                                                                                               | string    | N    |        |
| fontColor                 | 节点文字颜色                                                                                                                                                                               | string    | N    |        |
| borderWidth               | 节点边框粗细（像素）                                                                                                                                                                       | number    | N    | 1      |
| borderColor               | 节点边框颜色                                                                                                                                                                               | string    | N    |        |
| nodeShape                 | 节点形状，0:圆形；1:矩形;                                                                                                                                                                  | number    | N    | 1      |
| width                     | 节点宽度                                                                                                                                                                                   | number    | N    | 自动   |
| height                    | 节点高度                                                                                                                                                                                   | number    | N    | 自动   |
| opacity                   | 透明度(值范围：0到1,或者0到100)，设置为0可以实现隐藏的效果                                                                                                                                 | number    | N    | 1      |
| isHide                    | 是否隐藏这个节点，隐藏节点的同时，子节点也会被隐藏                                                                                                                                         | boolean   | N    | false  |
| disableDrag               | 是否禁用节点的拖动功能                                                                                                                                                                     | boolean   | N    | false  |
| disableDefaultClickEffect | 是否禁用默认的点击选中效果（即使禁用，可以出发自定的节点点击事件）                                                                                                                         | boolean   | N    | false  |
| expandHolderPosition      | 节点展开/关闭按钮位置（left/top/right/bottom）节点的这个设置会覆盖全局的expandHolderPosition设置，即使改节点没有子节点也可以让其显示展开/收缩按钮，可以实现部分节点显示展开/收缩按钮的效果 | string    | N    | hide   |
| expanded                  | 手工设置节点的展开收缩状态;                                                                                                                                                                | boolean   | N    | true   |
| fixed                     | 是否使用固定位置（以当前图谱左上角为0,0的坐标系）                                                                                                                                          | boolean   | N    | false  |
| x                         | x坐标（以当前图谱左上角为0,0的坐标系）,fixed=true时有效                                                                                                                                    | number    | N    |        |
| y                         | y坐标（以当前图谱左上角为0,0的坐标系）,fixed=true时有效                                                                                                                                    | number    | N    |        |
| offset_x                  | 节点横向偏移量                                                                                                                                                                             | number    | N    | 0      |
| offset_y                  | 节点纵向偏移量                                                                                                                                                                             | number    | N    | 0      |
| innerHTML                 | （请尽量不适用此属性，因为使用插槽能更方便更规范的自定义节点内容）用HTML自定义节点内部的内容，当此属性不为空时，text属性将失效;                                                            | string    | N    |        |
| html                      | （请尽量不适用此属性，因为使用插槽能更方便更规范的自定义节点内容）用HTML自定义节点，当此属性不为空时，节点的所有样式属性将失效                                                             | string    | N    |        |
| data                      | 自定义属性需要放在这里，才能在后续使用中从节点获取，如:\{myKey1: _value1,myKey2: _value2\}                                                                                                 | Object    | N    |        |

### Line Arributes / 线条数据的选项: 
| 参数           | 说明                                                                                        | 类型/传参 | 必选 | 默认值 |
| -------------- | ------------------------------------------------------------------------------------------- | --------- | ---- | ------ |
| from           | 关系from节点的id                                                                            | string    | Y    |        |
| to             | 关系to节点的id                                                                              | string    | Y    |        |
| text           | 关系文字                                                                                    | string    | Y    |        |
| styleClass     | 节点样式class                                                                               | string    | N    |        |
| lineWidth      | 线条粗细（像素）                                                                            | number    | N    | 1      |
| color          | 线条颜色                                                                                    | string    | N    |        |
| isHide         | 是否显示                                                                                    | boolean   | N    | false  |
| lineShape      | 线条样式（1:直线/2:样式2/3:样式3/4:折线/5:样式5/6:样式6）                                   | number    | N    |        |
| fontColor      | 节点id，不能重复，重复会被忽略                                                              | string    | N    |        |
| opacity        | 透明度(值范围：0到1,或者0到100)，设置为0可以实现隐藏的效果                                  | number    | N    | 1      |
| showLineLabel  | [已禁用，如果想要不显示可以设置text为空即可]是否显示连线文字                                | boolean   | N    | true   |
| showStartArrow | isHideArrow=true时此选项无效，是否显示起始箭头                                              | boolean   | N    | true   |
| showEndArrow   | isHideArrow=true时此选项无效，是否显示终止箭头                                              | boolean   | N    | true   |
| useTextPath    | 连线文字沿着连线路径走                                                                      | boolean   | N    | false  |
| id             | 自定义属性需要放在这里，才能在后续使用中从节点获取，如 :\{myKey1: _value1,myKey2: _value2\} | Object    | N    |        |