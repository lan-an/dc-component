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
  import { ref, watch,reactive } from 'vue';
  import { ElPopover,ElInput  } from 'element-plus'
  import DCron from './cron.vue'
  import type {InputCronEmits,IInputCronProps} from '@/dInputCron/dInputCron';

  defineOptions({
    name: 'DInputCron',
  });

  type InstanceDcron = InstanceType<typeof DCron>;

  const emit = defineEmits<InputCronEmits>();
  const props = withDefaults(defineProps<IInputCronProps>(),{
    value: '* * * * * ? *',
    config: () => ({
      maxHeight: '400px',
      startYear: (new Date()).getFullYear(),
    })
  });
  const cron$ = ref<null | InstanceDcron>()
  const state = reactive<{
    cronPopover: boolean,
    cron: string,
  }>({
    cronPopover: false,
    cron: ''
  })
  watch(() => props.value, value => {
    cron$.value.setValue(value??'* * * * * ? *')
    state.cron = value
  })

  const changeCron = (val) => {
    if(typeof(val) !== 'string') return false
    state.cron = val
    emit('update:value', val)
    emit('cronChange',val)
  }
  const togglePopover = (bol) => {
    state.cronPopover = bol
    bol&&cron$.value.setValue(props?.value??'* * * * * ? *')
  }
</script>

<style scoped></style>
