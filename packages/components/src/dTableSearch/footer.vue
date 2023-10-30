<template>
    <el-pagination 
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"  
    v-bind="{ ...pagination }" 
    />
</template>
<script lang="ts" setup>
import {
  ElPagination,
} from 'element-plus';
defineOptions({
  name:'DPage'
})
defineProps<{
  pagination:any,
  pageArr?:number[]
}>()
const emit =defineEmits(['handleCurrentChange','handleSizeChange'])
const handleSizeChange = (val: number) => {
  
emit('handleSizeChange',val)
}
const handleCurrentChange = (val: number) => {
  emit('handleCurrentChange',val)
}


</script>
