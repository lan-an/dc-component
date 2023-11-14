<!--
 * @Date: 2023-11-06 09:44:16
 * @Auth: 873768511@qq.com
 * @LastEditors: 873768511@qq.com
 * @LastEditTime: 2023-11-13 17:48:01
 * @FilePath: \dc-component\packages\components\src\dOrganizationTree\index.vue
-->
<template>
	<div :style="treeContainer">
		<ElInput
			v-if="isFiltratable||isAsyncSearch"
      v-model="filterText"
      clearable
      size="default"
			style="margin-bottom: 20px;"
      placeholder="请输入关键字进行搜索"
      >
      <template #append v-if="isAsyncSearch">
        <ElButton :icon="Search" @click="searchClick" />
      </template>
		</ElInput>
		<ElTree
			ref="treeRef"
			v-bind="{...$attrs}"
			:data="node"
			:check-strictly="props.checkStrictly"
			:show-checkbox="props.isShowCheckbox"
			:check-on-click-node="props.checkOnClickNode"
			:expand-on-click-node="props.expandOnClickNode"
			:lazy="props.isLazy"
			:filter-node-method="filterNode"
			style="height:calc(100% - 60px);"
		>
			<template #default="{ data, node }">
				<!-- <slot name="nodeIcon"></slot> -->
				<slot name="treeNode" :node="node" :data="data">
					<div style="overflow: hidden;">
						<ElTooltip
							:content="node.label"
							placement="right"
							effect="light"
							v-if="ellipsisLimit && node.label?.length > ellipsisLimit"
						>
							<div :class="typeof ellipsisLimit === 'boolean'?'ellipsis-node':''">
								{{ ellipsis(node.label, ellipsisLimit) }}
							</div>
						</ElTooltip>
						<div v-else>
							{{ node.label }}
						</div>
					</div>
				</slot>
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
// const defaultProps = {
// 	children: 'children',
// 	label: 'label',
// 	isLeaf:'isLeaf'
// };
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
	handSearch:[string,
	// (data:Tree[])=>void // 不要回调
],
	// getLoadTree:[number,(data:Tree[])=>void] // 不要回调
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
	// 点击是否展开子节点
	expandOnClickNode:{
		type:Boolean,
		default:() => false
	},
	// 选中节点是否选中复选框
	checkOnClickNode:{
		type:Boolean,
		default:() => false
	},
	// 是否显示复选框
	isShowCheckbox:{
		type:Boolean,
		defalut: () => false
	},
	// 是否异步加载子节点
	isLazy:{
		type:Boolean,
		default:true
	},
	// 是否可筛选
	isFiltratable:{
		type:Boolean,
		default:true
	},
	// 是否需要搜索功能
	isAsyncSearch: {
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
});

const node = computed(() => {
    return props.treeData
});


/**
 * 
 * @param value 筛选值
 * @param data 节点信息
 * @param node 节点信息
 */
const filterNode = (value: string, data: Tree, node:Node) => {
  if (!value) return true
  return node.label.includes(value)
}
const filterText = ref('')
watch(filterText, (val) => {
	if(props.isAsyncSearch)return
	let timer:NodeJS.Timeout;
	clearTimeout(timer);
	timer = setTimeout(()=>{
		treeRef.value!.filter(val)
	},500)
})

const searchClick = () =>{
	emits('handSearch', filterText.value
	// ,(data:Tree[])=>{
	// 		node.value=data
	// 	}
	)
}

// /**
//  * 
//  * @param node 当前选择树节点
//  * @param resolve 懒加载子节点回调
//  */
// const loadTree = (node:Node, resolve: (data: Tree[]) => void)=>{
// 	emits('getLoadTree', node.id, (data:Tree[])=>{
// 			resolve(data)
// 		})
// }

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