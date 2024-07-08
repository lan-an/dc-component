<template>
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    v-bind="{ ...pagination }"
  />
</template>
<script setup>
defineOptions({
  name: "DPage",
});
const {pagination} = defineProps({
  pagination:Object
});
const emit = defineEmits(["handleCurrentChange", "handleSizeChange"]);
const handleSizeChange = (val) => {
  emit("handleSizeChange", val);
};
const handleCurrentChange = (val) => {
  emit("handleCurrentChange", val);
};
</script>
