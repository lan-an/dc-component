# dInputCron组件

Cron组件，结合表单input数据双向绑定，支持数据回显。

## 基础用法
<el-form
  label-position="right"
  label-width="100px"
  :model="formState"
  style="max-width: 460px"
>
  <el-form-item label="Cron值：">
    <d-input-cron 
      v-model:value="formState.cron" 
      @cronChange="change" 
      :config="{
        maxHeight: '345px',
        startYear: 2023
      }"
    />
  </el-form-item>
</el-form>

<script lang="ts" setup>
  import { ElForm,ElFormItem  } from 'element-plus'
  import { reactive } from 'vue';
  const formState = reactive<{cron: string}>({
      // 初始值
      cron: '0,1 4-3 * * * ? *'
  })
  // 值改变
  const change = val => {
    console.log('cron change: ',formState.cron);
  }
</script>

::: details 查看源码

```vue

<template>
  <el-form
    label-position="right"
    label-width="100px"
    :model="formState"
    style="max-width: 460px"
  >
    <el-form-item label="Cron值：">
      <d-input-cron 
        v-model:value="formState.cron" 
        @cronChange="change" 
        :config="{
          maxHeight: '345px',
          startYear: 2023
        }"
      />
    </el-form-item>
  </el-form>
</template>
<script lang="ts" setup>
  import { ElForm,ElFormItem  } from 'element-plus'
  import { reactive } from 'vue';
  const formState = reactive<{cron: string}>({
      // 初始值
      cron: '0,1 4-3 * * * ? *'
  })
  // 值改变
  const change = val => {
    console.log('cron change: ',formState.cron);
  }
</script>


  
```

:::

## Attributes

| 参数          | 说明 | 类型   | 必填                                           | 默认值  |
| ---- | ---- | ------ | ------------------------------------------------ | ------- |
| value | cron值 | string(cron类型) | --- | * * * * * ? * |
| config | cron配置 | object | false |参考cron组件的Config配置  |

### cron组件的Config

| 参数          | 说明 | 类型   | 必填                                           | 默认值  |
| ---- | ---- | ------ | ------------------------------------------------ | ------- |
|  maxHeight | 弹出组件的高度 | string | false | '400px' |
| startYear | 可选年的开始年 | number | false | 默认当前年  |

## Events
| 事件名          | 说明 | 类型     |
| ---- | ---- | ------ |
| cronChange |  cron值改变时触发 |  Function  (value: string) => void |