# dDrawerForm 抽屉表单

抽屉组件便捷式开发，封装了 Drawer 和 Form 的简单业务使用。

## 基础用法
抽屉可以从多个方向呼出，你可以通过传入对应的 direction 和 size 属性来修改这一默认行为。
新建表单定义表单的绑定form={}如果表单需要回显form={key:value}

<d-drawer-form></d-drawer-form>

::: details 查看源码

```vue

<template>
    <div>
        <d-drawer-form :formProp="{
            labelWidth: '120.0px',
            model: 'formLabelAlign',
        }" :direction='direction' ref="ruleFormRef" :form="form" :rules="rules" v-model:modelValue="show"
            @complete="handleConfirm" @handleCancel="handleCancel">
            <template #formData="{ form }">
                <el-form-item prop="name" label="名称">
                    <el-input v-model="form.name" />
                </el-form-item>
                <el-form-item label="Activity region" prop="region">
                    <el-select v-model="form.region" placeholder="Activity region">
                        <el-option label="Zone one" value="shanghai" />
                        <el-option label="Zone two" value="beijing" />
                    </el-select>
                </el-form-item>
                <el-form-item label="Activity count" prop="count">
                    <el-select-v2 v-model="form.count" placeholder="Activity count" :options="options" />
                </el-form-item>
            </template>
            <template #submitter>
                <el-button @click="handleReset(ruleFormRef)"> 重置 </el-button>
            </template>
        </d-drawer-form>
        <el-radio-group v-model="direction">
            <el-radio label="ltr">left to right</el-radio>
            <el-radio label="rtl">right to left</el-radio>
            <el-radio label="ttb">top to bottom</el-radio>
            <el-radio label="btt">bottom to top</el-radio>
        </el-radio-group>
        <div style="margin: 20px 0;">
            <el-button type="primary" @click="handleNewform"> 新建表单 </el-button>
            <el-button type="primary" @click="handleEchoform"> 表单回显</el-button>
        </div>
    </div>
</template>
  
<script lang="ts" setup>
import { DDrawerForm } from 'dc-pro-component';

import {
    ElButton,
    ElInput,
    ElFormItem,
    ElSelect,
    ElSelectV2,
    ElOption,
    ElRadioGroup,
    ElRadio
} from 'element-plus';
import { ref } from 'vue';
const direction = ref('rtl')
const show = ref<boolean>(false);
let form = ref<any>({});
const ruleFormRef = ref();
const options = Array.from({ length: 10000 }).map((_, idx) => ({
    value: `${idx + 1}`,
    label: `${idx + 1}`,
}));
const rules = ref({
    name: [
        { required: true, message: 'Please input Activity name', trigger: 'blur' },
        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ],
    region: [
        { required: true, message: 'Please select Activity count', trigger: 'change', },
    ],
});
const handleNewform = () => {
    show.value = true;
    form.value = {};
};
const handleEchoform = () => {
    show.value = true;
    form.value = { name: 'name', region: 'shanghai', count: '1' };
};
const handleConfirm = (data, callBack) => {
    callBack();
};
const handleReset = (Ele) => {
    Ele.resetFields?.();
};
const handleCancel = (Ele) => {
};
</script>

```

:::

## DrawerForm API
### DrawerForm 属性

| 参数         | 说明                                     | 类型   | 可选值                  | 默认值     |
| ------------ | ---------------------------------------- | ------ | ----------------------- | ---------- |
| title        | 标题                                    | string        |                        | -          |
| modelValue   | 显示状态                                 | boolean       | true false             | false      |
| direction    | Drawer 打开的方向                        | enum          | 'ltr' rtl' 'ttb' 'btt'  | ltr        |
| size         | Drawer 窗体的大小                        | number string |                         | 30%        |
| showFooter   | 是否展示底部                             | boolean        |  true false            | true       |
| form         | 表单数据对象                             | object         |                         | -          |
| rules        | 表单验证规则                             | object         |                         | -          |
| confirmText  | 确定按钮的文本内容                        | string         |                         | 确定        |
| cancelText   | 取消按钮的文本内容                        | string         |                         | 取消        |

### DrawerForm 事件

| 事件名     | 说明                 | 回调参数           |
| ---------- | -------------------- | ------------------ |
| handleConfirm | 提交表单，关闭 Drawer触发 | form callBack |
| handleCancel  | 取消表单，关闭 Drawer触发 | callback    |

### DrawerForm 插槽

| 插槽名  | 说明     |
| ------- | -------- |
| default | 默认插槽 |
| header | Drawer 标题的内容 |
| footer | Drawer 页脚部分 |
