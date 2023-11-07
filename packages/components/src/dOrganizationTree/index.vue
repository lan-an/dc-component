<!--
 * @Date: 2023-11-06 09:44:16
 * @Auth: 873768511@qq.com
 * @LastEditors: 873768511@qq.com
 * @LastEditTime: 2023-11-07 18:07:18
 * @FilePath: \dc-component\packages\components\src\dOrganizationTree\index.vue
-->
<template>
	<div :style="treeContainer">
		<slot name="search"></slot>
		<ElTree
			class="treeOrg"
			ref="treeRef"
			v-bind="$attrs"
			:icon="nodeIcon"
			:node-key="nodeKey"
			:data="props.treeData"
			:props="defaultProps"
			:load="loadTree"
			:lazy="isLazy"
			@node-click="handleNodeClick"
		>
			<template #default="{ node }">
				<span>
					<ElTooltip
						:content="node.label"
						placement="bottom-start"
						effect="light"
						v-if="node.label.length > ellipsisLen"
					>
						<span>
							{{ ellipsis(node.label, ellipsisLen) }}
						</span>
					</ElTooltip>
					<span v-else>
						{{ node.label }}
					</span>
				</span>
			</template>
		</ElTree>
	</div>
</template>
 
<script setup lang="ts">
import {ElTree, ElTooltip} from 'element-plus'
import { CSSProperties, nextTick, ref, computed } from 'vue';
import type Node from 'element-plus/es/components/tree/src/model/node';

defineOptions({
  name: 'OrganizationTree'
})

const treeRef = ref(); // 树实例

// 默认配置
const defaultProps = {
	children: 'children',
	label: 'label',
};
// 超出节点省略
const ellipsis = (value: string, len: number) => {
	if (!value) return '';
	if (value.length > len) return value.slice(0, len) + '...';
};
 
// 子组件事件发送
const emits = defineEmits(['eCurNode']);

// 接受父组件传递过来的数据
const props = defineProps({
	// 树型数据
	treeData: {
		type: Array,
		default: () => [],
	},
	// 是否异步加载子节点
	isLazy:{
		type:Boolean,
		default:false
	},
	// 唯一标识
	nodeKey:{
		type:String,
		default:'id'
	},
	// 节点图标 ?
	nodeIcon:{
		type:String,
		default:'Position'
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
	ellipsisLen: {
		type: Number,
		default: () => 8,
	},
});
// 懒加载子节点
const loadTree = (node:object)=>{
	if(!props.isLazy) return
	console.log(node,'lazy')
}
// 点击节点时触发
const handleNodeClick = (data: object) => {
	console.log('点击节点', data);
	emits('eCurNode', data);
};
 
defineExpose({
	treeRef
});
</script>
<style>

</style>