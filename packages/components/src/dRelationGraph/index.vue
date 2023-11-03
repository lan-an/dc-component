<template>
  <relation-graph
    ref="relationGraphRef"
    v-bind="{ ...$attrs }"
    :style="{
      width: !width ? '100%' : `${width}px`,
      height: !height ? '100%' : `${height}px`,
    }"
  >
    <template v-for="(slot, name) in $slots" :key="name" #[name]="scoped">
      <slot
        :name="name"
        relationGraph
        v-if="name === 'canvas-plug' || name === 'graph-plug'"
      ></slot>
      <slot :name="name" :[name]="scoped[name]" v-else></slot>
    </template>
  </relation-graph>
</template>

<script setup name="DRelationGraph" lang="ts">
import { ref, watch, nextTick } from 'vue';
import RelationGraph from 'relation-graph/vue3';
const relationGraphRef = ref<RelationGraph>();
import type {
  DRGData,
  RGJsonData,
  RGOptions,
  RelationGraphInstance,
  RGRefreshCallback,
  RGLayouter,
} from '@/components';
defineOptions({
  name: 'DRelationGraph',
});
const emit = defineEmits(['drawComplete']);
const props = withDefaults(
  defineProps<{
    width?: number;
    height?: number;
    graphData: DRGData;
  }>(),
  {
    width: 0,
    height: 0,
    graphData: () => {
      return {
        type: 'json',
        data: {
          nodes: [],
          lines: [],
        },
      };
    },
  },
);
const showGraph = (data: RGJsonData) => {
  relationGraphRef?.value?.setJsonData(data, graphInstance => {
    // 这些写上当图谱初始化完成后需要执行的代码
    emit('drawComplete', graphInstance);
  });
};
watch(
  () => props.graphData,
  value => {
    const { type, data } = value;
    switch (type) {
      case 'json':
        nextTick(() => {
          showGraph(data);
        });
        break;
    }
  },
  { immediate: true, deep: true },
);

defineExpose({
  getInstance: () => relationGraphRef.value.getInstance(),
  setOptions: (
    options: RGOptions,
    callback?: (graphInstance: RelationGraphInstance) => void,
  ) => relationGraphRef.value.setOptions(options, callback),
  setJsonData: (
    jsonData: RGJsonData,
    reLayoutOrCallback?: boolean | RGRefreshCallback,
    callback?: (graphInstance: RelationGraphInstance) => void,
  ) =>
    relationGraphRef.value.setJsonData(jsonData, reLayoutOrCallback, callback),
  appendJsonData: (
    jsonData: RGJsonData,
    reLayout?: boolean | RGRefreshCallback,
    callback?: (graphInstance: RelationGraphInstance) => void,
  ) => relationGraphRef.value.appendJsonData(jsonData, reLayout, callback),
  setLayouter: (layouterInstance: RGLayouter) =>
    relationGraphRef.value.setLayouter(layouterInstance),
  onGraphResize: () => relationGraphRef.value.onGraphResize(),
  refresh: (callback?: RGRefreshCallback) =>
    relationGraphRef.value.refresh(callback),
  focusRootNode: () => relationGraphRef.value.focusRootNode(),
  focusNodeById: (nodeId: string) =>
    relationGraphRef.value.focusNodeById(nodeId),
  getNodeById: (nodeId: string) => relationGraphRef.value.getNodeById(nodeId),
  removeNodeById: (nodeId: string) =>
    relationGraphRef.value.removeNodeById(nodeId),
  getNodes: () => relationGraphRef.value.getNodes(),
  getLinks: () => relationGraphRef.value.getLinks(),
  getGraphJsonData: () => relationGraphRef.value.getGraphJsonData(),
  getGraphJsonOptions: () => relationGraphRef.value.getGraphJsonOptions(),
  updateView: () => relationGraphRef.value.updateView(),
});
</script>

<style scoped></style>
