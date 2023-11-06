<!--
 * @Date: 2023-11-10 23:59:59
 * @Auth: 915005137@qq.com
 * @LastEditors: 915005137@qq.com
 * @LastEditTime: 2023-11-10 23:59:59
 * @FilePath: \dc-component\packages\components\src\fileUpload\index.vue
 -->
<template>
  <div>
    <el-upload
      :drag="isDrag"
      :file-list="fileList"
      :accept="fileTypes"
      :action="uploadUrl"
      :auto-upload="autoUpload"
      :before-upload="uploadBefore"
      :data="paramsData"
      :headers="uploadHeaders"
      :limit="limitNum"
      :on-error="handleError"
      :on-exceed="exceedFile"
      :on-remove="uploadRemove"
      :on-change="uploadChange"
      :on-success="uploadSuccess"
      class="upload-demo"
      :multiple="limitNum!==1"
    >
      <el-button v-if="!isDrag" type="primary">上传文件</el-button>
      <div v-else class="el-icon-view">
        <el-icon class="el-icon--upload"><upload-filled style="width: 1em; height: 1em;" /></el-icon>
        <div class="el-upload__text">
          将文件拖到此处或单击上载
        </div>
      </div>
      <template #tip>
        <div class="el-upload__tip">
          {{`可上传${fileTypes}等格式文件，单个文件大小不超过${fileSize}M${limitNum!==1?'，最多可上传'+limitNum+'个附件':''}`}}
        </div>
      </template>
    </el-upload>
  </div>
</template>

<script lang="ts" setup>
/**
 * @param {String} fileTypes - 限制文件类型，默认为.xls,.xlsx,.doc,.docx,.pdf,.zip
 * @param {String} uploadUrl - 接口地址
 * @param {Boolean} isDrag - 是否拖拽，默认为否
 * @param {Boolean} autoUpload - 是否自动上传文件，默认为是
 * @param {Number} limitNum - 数量限制，默认为3
 * @param {Number} fileSize - 文件大小限制，默认为5M
 * @param {Array} fileList - 文件列表，用于数据回显
 * @param {Object} paramsData - 额外参数
 * @param {Object} uploadHeaders - 请求头
 */
import {defineOptions,PropType} from 'vue';
import { UploadFilled } from '@element-plus/icons-vue'
import {ElMessage,ElButton,ElUpload} from "element-plus";

defineOptions({
  name: 'DFileUpload'
})
const emit = defineEmits(['upload-change', 'upload-error', 'upload-remove','upload-success'])
const props = defineProps({
  fileList: {
    type: Array as PropType<any[]>,
    default: () => [],
  },
  uploadHeaders: {
    type: Object as PropType<{ [key: string]: any }>,
    default: () => {}
  },
  paramsData:{
    type: Object as PropType<{ [key: string]: any }>,
    default: () => {}
  },
  uploadUrl:{
    type: String,
    default:''
  },
  fileTypes:{
    type:String,
    default:'.xls,.xlsx,.doc,.docx,.pdf,.zip'
  },
  limitNum:{
    type: Number,
    default:3
  },
  fileSize:{
    type: Number,
    default:5
  },
  isDrag:{
    type: Boolean,
    default:false
  },
  autoUpload:{
    type: Boolean,
    default:true
  }
})
//上传前回调校验文件格式大小
const uploadBefore = (file: any) => {
  let index = file.name.lastIndexOf('.')
  let format = file.name.substring(index, file.name.length)
  const typeList: string[] | undefined = props.fileTypes?.split(',') as string[];
  const isLtSize = file.size / 1024 / 1024 < props.fileSize
  if (typeList.indexOf(format)===-1) {
    ElMessage.warning(`请上传${props.fileTypes}格式文件!`)
    return false
  } else if (!isLtSize) {
    ElMessage.warning(`单个文件不能超过${props.fileSize}M，请重新上传!`)
    return false
  } else {
    return true
  }
}
//限制文件数量
const exceedFile = (file: any, list: any) => {
  ElMessage.warning(`限制为${props.limitNum},你上传了${file.length + list.length}个文件`)
}
//删除文件
const uploadRemove = (file: any, list: any) => {
  emit('upload-remove', file, list);
}
//上传失败回调
const handleError = (err: any) => {
  emit('upload-error', err);
}
//文件上传更新--一般用于手动上传
const uploadChange = (file: any, list: any) => {
  emit('upload-change', file, list);
}
// 文件上传成功
const uploadSuccess = (file: any, list: any) => {
  emit('upload-success', file, list);
}
</script>
<style>
.el-icon-view{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
