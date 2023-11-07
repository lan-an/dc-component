<!--
 * @Date: 2023-11-06 09:08:51
 * @Auth: 873768511@qq.com
 * @LastEditors: 873768511@qq.com
 * @LastEditTime: 2023-11-06 10:05:37
 * @FilePath: \dc-component\packages\components\src\dModal\index.vue
-->
<template>
  <el-dialog
    v-model="dialogVisible"
    :title="title"
    :width="width"
    :before-close="beforeClose"
    :draggable="draggable"
    :center="center"
    :destroy-on-close="destroyOnClose"
    :open-delay="opendelay"
    :close-delay="closedelay"
    :close-on-click-modal="closeonclickmodal"
    :close-on-press-escape="closeonpressescape"
    @open="emits('open')"
    @close="emits('close')"
  >
    <template #default>
      <slot />
    </template>
    <template #header>
      <slot name="title" />
    </template>
    <template #footer>
      <slot name="footer" />
    </template>
  </el-dialog>
</template>
  

<script lang="ts" name="DModal" setup>
import { ref, watchEffect } from 'vue';
import { ElDialog } from 'element-plus';
import { IProps } from '@/components'

defineOptions({
  name: 'DModal',
});

const props = withDefaults(defineProps<IProps>(), {
  visible: false,
  title: '提示',
  fullscreen: false,
  width: '30%',
  top: '15vh',
  draggable: false,
  center: false,
  alignCenter: false,
  destroyOnClose: true,
  opendelay:0,
  closedelay:0,
  closeonclickmodal:false,
  closeonpressescape:false,
  beforeClose: undefined,
  open:undefined,
  close: undefined,
});

const emits = defineEmits(['close', 'open']);

const dialogVisible = ref<boolean>(false);
watchEffect(() => (dialogVisible.value = props.visible));
</script>
<style scoped>
</style>
  