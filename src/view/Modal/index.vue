<template>
  <DModal
    :visible="visibleModal"
    :title="'标题'"
    width="30%"
    :custom-class="'upload_dialog'"
    @close="visibleModal = false"
  >
    <div>这是Modal</div>
  </DModal>
  <el-button type="primary" @click="visibleModal = !visibleModal">visibleModal</el-button>
</template>

<script setup lang="ts">
import {DModal} from 'dc-pro-component';
import {ElButton} from 'element-plus';
import { ref } from 'vue';
const visibleModal = ref<boolean>(false)
</script>

<style>

</style>