<!--
 * @Date: 2023-11-06 09:44:16
 * @Auth: 873768511@qq.com
 * @LastEditors: 873768511@qq.com
 * @LastEditTime: 2023-11-10 10:53:26
 * @FilePath: \dc-component\packages\components\src\dOrganizationTree\index.vue
-->
<template>
	<div :style="treeContainer">
		<ElInput
			v-if="isSearchable"
      v-model="filterText"
      clearable
      size="large"
			style="margin-bottom: 20px;"
      placeholder="请输入关键字进行搜索"
      @keyup.enter="searchClick"
      >
      <template #append>
        <ElButton :icon="Search" @click="searchClick" />
      </template>
		</ElInput>
		<ElTree
			ref="treeRef"
			v-bind="{...$attrs}"
			:node-key="props.nodeKey"
			:data="node"
			:props="defaultProps"
			:check-strictly="props.checkStrictly"
			:show-checkbox="props.isShowCheckbox"
			:check-on-click-node="props.checkOnClickNode"
			:expand-on-click-node="props.isExpandOnClickNode"
			:highlight-current="isHighlight"
			:lazy="props.isLazy"
			:load="loadTree"
			:filter-node-method="filterNode"
			:allow-drag="allowDrag"
			:draggable="isDraggable"
			:allow-drop="allowDrop"
			@node-drag-end="handleDragEnd"
			@node-click="handleNodeClick"
			@check-change="getCheckedAllNodes"
			style="height:calc(100% - 60px);"
		>
			<template #default="{ node }">
				<div style="overflow: hidden;">
					<ElTooltip
						:content="node.label"
						placement="right"
						effect="light"
						v-if="ellipsisLimit && node.label.length > ellipsisLimit"
					>
						<div :class="typeof ellipsisLimit === 'boolean'?'ellipsis-node':''">
							{{ ellipsis(node.label, ellipsisLimit) }}
						</div>
					</ElTooltip>
					<div v-else>
						{{ node.label }}
					</div>
				</div>
			</template>
			<template #empty>
				<slot name="empty"></slot>
			</template>
		</ElTree>
	</div>
</template>
 
<script setup lang="ts">
import type {Tree} from './OrganizationTree'
import {ElTree, ElButton, ElTooltip, ElInput, ElDivider} from 'element-plus'
import {Search} from '@element-plus/icons-vue'
import { CSSProperties, watch, nextTick, ref, computed, reactive, toRef, onMounted, useSlots } from 'vue';
import type Node from 'element-plus/es/components/tree/src/model/node';

defineOptions({
  name: 'OrganizationTree'
})

const treeRef = ref(); // 树实例

// 默认配置
const defaultProps = {
	children: 'children',
	label: 'label',
	isLeaf:'isLeaf'
};
/**
 * 
 * @param value 树节点展示信息
 * @param limit 限制展示条件
 */
const ellipsis = (value: string, limit: number|boolean) => {
	if(typeof limit === 'number' && value){
		return value.slice(0, limit) + '...';
	}
	return value
};
 
// 子组件事件发送
const emits = defineEmits<{
	handleNodeClick:[Tree],
	handleSelected:[Tree,boolean,Tree[],Tree[]],
	handSearch:[string,(data:Tree[])=>void],
	handSaveNodes:[Tree],
	getLoadTree:[number,(data:Tree[])=>void]
}>()
// 接受父组件传递过来的数据
const props = defineProps({
	// 树型数据
	treeData: {
		type: Array,
		default: () => [],
	},
	// 是否父子不想关联
	checkStrictly:{
		type:Boolean,
		defalut: () => true
	},
	isHighlight:{ // ?
		type:Boolean,
		defalut: () => true
	},
	//
	isExpandOnClickNode:{
		type:Boolean,
		default:() => false
	},
	// 选中节点是否选中复选框
	checkOnClickNode:{
		type:Boolean,
		default:() => false
	},
	// 是否显示复选框 ?
	isShowCheckbox:{
		type:Boolean,
		defalut: () => true
	},
	// 是否异步加载子节点
	isLazy:{
		type:Boolean,
		default:true
	},
	isFiltratable:{
		type:Boolean,
		default:true
	},
	// 唯一标识
	nodeKey:{
		type:String,
		default:'id'
	},
	// 是否需要搜索功能
	isSearchable: {
		type: Boolean,
		default: true,
	},
	// 树容器的样式
	treeContainer: {
		type: Object,
		default: () =>
			({
				width: '300px',
				height: 'calc(100vh - 200px)',
				'overflow-y': 'auto',
			} as CSSProperties),
	},
	// 节点文本超出长度时显示的字符个数
	ellipsisLimit: {
		type: [Number,Boolean],
		default: () => true,
	},
	// 是否开启拖拽节点功能
	isDraggable: {
		type: Boolean,
		default: () => false,
	}
});
// 判断节点能否被放置 如果返回 false ，节点不能被放置
const allowDrop = () => true;
// 判断节点能否被拖拽 如果返回 false ，节点不能被拖动
const allowDrag = () => true;
// 结束拖拽
const handleDragEnd = (dropNode: Node) => {
	if (!dropNode) return;
	if (props.isDraggable === false) return;
	// 保存节点
	saveNode(dropNode);
};
function saveNode(dropNode) {
	emits('handSaveNodes', dropNode);
	// emits('handSaveNodes', props.treeData);
}

const node=ref([])
watch(()=>props.treeData,(newValue)=>{
	node.value=newValue
},{
	deep:true,
	immediate:true
})
/**
 * 
 * @param node 当前选择树节点
 * @param resolve 懒加载子节点回调
 */
const loadTree = (node:Node, resolve: (data: Tree[]) => void)=>{
	emits('getLoadTree', node.id, (data:Tree[])=>{
			resolve(data)
		})
  
}
// 复选框改变
const getCheckedAllNodes = (data: Tree, isSelected: boolean) => {
	if (!props.isShowCheckbox) return;
	// 获取所有选中的节点
	const checkedNodes = treeRef.value.getCheckedNodes();
	// 获取所有半选中的节点
	const halfCheckedNodes = treeRef.value.getHalfCheckedNodes();
	// data: 当前节点的数据
	// isSelected: 当前节点是否被选中
	// checkedNodes: 所有选中的节点
	// halfCheckedNodes: 所有半选中的节点
	emits('handleSelected', data, isSelected, checkedNodes, halfCheckedNodes);
};

const filterText = ref('')
watch(filterText, (val) => {
	let timer:NodeJS.Timeout;
	clearTimeout(timer);
	timer = setTimeout(()=>{
		treeRef.value!.filter(val)
	},500)
})
/**
 * 
 * @param value 筛选值
 * @param data 树节点信息
 */
const filterNode = (value: string, data: Tree) => {
  if (props.isSearchable||!value||!props.isFiltratable) return true
  return data.label.includes(value)
}

const searchClick = () =>{
	if(!props.isSearchable)return
	emits('handSearch', filterText.value, (data:Tree[])=>{
		node.value=data
		})
}
/**
 * 
 * @param data 点击树节点信息
 */
const handleNodeClick = (data: Tree) => {
	emits('handleNodeClick', data);
};

defineExpose({
	treeRef
});
</script>
<style>
.ellipsis-node{
	width: 100%;
	display: block;
	overflow: hidden;
	text-overflow: ellipsis;
	word-break: keep-all;
	white-space: nowrap;
}
</style>