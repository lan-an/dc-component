<!--
 * @Date: 2023-11-08 18:26:08
 * @Auth: 463997479@qq.com
 * @LastEditors: 463997479@qq.com
 * @LastEditTime: 2023-11-10 18:18:39
 * @FilePath: \dc-component\packages\components\src\dInputCron\index.vue
-->
<template>
  <el-popover :visible="state.cronPopover" width="560px" trigger="click">
    <template #reference>
      <el-input
        @click="togglePopover(true)"
        v-model="props.value"
        placeholder="请选择"
        readonly
      ></el-input>
    </template>
    <template #default>
      <d-cron
        ref="cron$"
        @change="changeCron"
        @close="togglePopover(false)"
        :config="config"
      ></d-cron>
    </template>
  </el-popover>
</template>

<script setup name="DInputCron" lang="ts">
import { ref, watch, reactive } from 'vue';
import { ElPopover, ElInput } from 'element-plus';
import DCron from './cron.vue';
defineOptions({
  name: 'DInputCron',
});
import type { InputCronEmits, IInputCronProps } from '@/dInputCron/dInputCron';
type InstanceDcron = InstanceType<typeof DCron>;

const emit = defineEmits<InputCronEmits>();
const props = withDefaults(
  defineProps<{
    value?: string;
    config?: {
      maxHeight?: number | string;
      startYear?: number;
    };
  }>(),
  {
    value: '* * * * * ? *',
    config: () => ({
      maxHeight: '400px',
      startYear: new Date().getFullYear(),
    }),
  },
);
const cron$ = ref<null | InstanceDcron>();
const state = reactive<{
  cronPopover: boolean;
  cron: string;
}>({
  cronPopover: false,
  cron: '',
});
watch(
  () => props.value,
  (value) => {
    cron$.value.setValue(value ?? '* * * * * ? *');
    state.cron = value;
  },
);

const changeCron = (val) => {
  if (typeof val !== 'string') return false;
  state.cron = val;
  emit('update:value', val);
  emit('cronChange', val);
};
const togglePopover = (bol) => {
  state.cronPopover = bol;
  bol && cron$.value.setValue(props?.value ?? '* * * * * ? *');
};
</script>

<style scoped></style>
