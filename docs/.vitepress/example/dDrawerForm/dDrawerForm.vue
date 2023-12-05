<template>
    <div>
        <d-drawer-form :formProp="{
            direction: direction,
            labelWidth: '120.0px',
            labelPosition: 'right',
        }" 
        :title="title" v-model:modelValue="show" ref="ruleFormRef" :form="form" :rules="rules" @complete="handleConfirm"
            @handleCancel="handleCancel">
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
import { nextTick, ref } from 'vue';
const title = ref("")
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
        { required: true, message: 'Please select Activity count', trigger: 'blur', },
    ],
});
const handleNewform = () => {
    title.value = '新建表单'
    show.value = true;
    form.value = {};
};
const handleEchoform = () => {
    title.value = '表单回显'
    show.value = true;
    nextTick(() => {
        form.value = { name: 'name', region: 'shanghai', count: '1' };
    })
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