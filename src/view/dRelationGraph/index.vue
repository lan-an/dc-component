<template>
  <div style="width: 1200px;height: 800px;">
    <d-relation-graph :options="options" :graphData="graphData" ref="rgDom" @drawComplete="drawComplete"></d-relation-graph>
  </div>
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
      { id: '1', text: '节点-1' },
      { id: '2', text: '节点-2' },
      { id: '3', text: '节点-3' },
      { id: '4', text: '节点-4' },
      { id: '6', text: '节点-6' },
      { id: '7', text: '节点-7' },
      { id: '8', text: '节点-8' },
      { id: '9', text: '节点-9' },
      { id: '71', text: '节点-71' },
      { id: '72', text: '节点-72' },
      { id: '73', text: '节点-73' },
      { id: '81', text: '节点-81' },
      { id: '82', text: '节点-82' },
      { id: '83', text: '节点-83' },
      { id: '84', text: '节点-84' },
      { id: '85', text: '节点-85' },
      { id: '91', text: '节点-91' },
      { id: '92', text: '节点-82' },
      { id: '51', text: '节点-51' },
      { id: '52', text: '节点-52' },
      { id: '53', text: '节点-53' },
      { id: '54', text: '节点-54' },
      { id: '55', text: '节点-55' },
      { id: '5', text: '节点-5' }
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