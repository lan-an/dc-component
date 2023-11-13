<template>
  <div>
    <input
      ref="reuploadInput"
      type="file"
      accept="image/*"
      @change="onChange"
      id="fileBtn"
      style="display: none"
    />
    <el-dialog
      v-model="dialogVisible"
      :title="title"
      :width="'40%'"
      @close="dialogVisible = false"
    >
      <template #default>
        <div class="cropper">
          <div class="cropper_left">
            <AsyncComp
              :style="{ width: '400px' }"
              ref="cropperRef"
              :img="options.img"
              :info="true"
              :info-true="options.infoTrue"
              :auto-crop="options.autoCrop"
              :autoCropWidth="options.autoCropWidth"
              :autoCropHeight="options.autoCropHeight"
              :outputSize="options.outputSize"
              :outputType="options.outputType"
              :fixed-box="options.fixedBox"
              :can-move="options.canMoveBox"
              :can-scale="options.canScale"
              :fixed-number="fixedNumber"
              :fixed="options.fixed"
              :full="options.full"
              :center-box="options.centerBox"
              @real-time="previewHandle"
            />
            <div class="reupload_box">
              <div class="reupload_text" @click="uploadFile('reload')">
                重新上传
              </div>
              <div>
                <el-icon
                  v-if="amplify"
                  class="rotate_right"
                  @click="changeScale(1)"
                >
                  <CirclePlus />
                </el-icon>
                <el-icon
                  v-if="reduce"
                  class="rotate_right"
                  @click="changeScale(-1)"
                >
                  <Remove />
                </el-icon>
                <el-icon
                  v-if="rotate"
                  class="rotate_right"
                  @click="rotateRight"
                >
                  <RefreshRight />
                </el-icon>
              </div>
            </div>
          </div>

          <div class="cropper_right">
            <div class="preview_text">预览</div>
            <div :style="getStyle" class="previewImg">
              <div :style="previewFileStyle">
                <img
                  class="previewImg"
                  :style="previews.img"
                  :src="previews.url"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </template>

      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="" @click="refreshCrop">重置</el-button>
          <el-button type="primary" @click="onConfirm"> 确认 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup name="DCropper">
import 'vue-cropper/dist/index.css';
import type { Options, IProps, IStyle } from './dCropper';
import { ref, watch, reactive, defineAsyncComponent } from 'vue';
import { ElMessage, ElDialog, ElIcon, ElButton } from 'element-plus';
import { CirclePlus, Remove, RefreshRight } from '@element-plus/icons-vue';
const AsyncComp = defineAsyncComponent(
  () => import('vue-cropper/lib/vue-cropper.vue'),
);
defineOptions({
  name: 'DCropper',
});
const dialogVisible = ref<boolean>(false); // dialog的显示与隐藏
const emits = defineEmits(['getCropData']); // 自定义事件
const props = withDefaults(
  defineProps<{
    allowTypeList?: string[]; // 接收允许上传的图片类型
    limitSize?: number; // 限制大小
    fixedNumber?: number[]; // 截图框的宽高比例
    previewWidth?: '100' | '150' | '200' | '250' | '300'; // 预览宽度
    title?: string; // 裁剪标题
    type?: string; // 返回的文件类型 Base64  Blob  file对象
    rotate?: boolean; // 是否显示旋转按钮
    canScale?: boolean; //图片是否允许滚轮缩放
    amplify?: boolean; // 是否显示放大按钮
    reduce?: boolean; // 是否显示缩小按钮
  }>(),
  {
    allowTypeList: () => ['jpg', 'png', 'jpeg', 'gif', 'webp'],
    limitSize: 10,
    fixedNumber: () => [1, 1],
    previewWidth: '200',
    title: '图片裁剪',
    type: 'default',
    rotate: true,
    amplify: true,
    reduce: true,
    canScale: true,
  },
);

// 裁剪组件需要使用到的参数
const options = reactive<Options>({
  img: '', // 需要剪裁的图片
  autoCrop: true, // 是否默认生成截图框
  autoCropWidth: 200, // 默认生成截图框的宽度
  autoCropHeight: 200, // 默认生成截图框的长度
  fixedBox: false, // 是否固定截图框的大小 不允许改变
  info: true, // 裁剪框的大小信息
  outputSize: 1, // 裁剪生成图片的质量 [1至0.1]
  outputType: 'png', // 裁剪生成图片的格式
  canScale: props.canScale, // 图片是否允许滚轮缩放
  fixed: true, // 是否开启截图框宽高固定比例
  fixedNumber: props.fixedNumber, // 截图框的宽高比例 需要配合centerBox一起使用才能生效 1比1
  full: true, // 是否输出原图比例的截图
  canMoveBox: true, // 截图框能否拖动
  original: true, // 上传图片按照原始比例渲染
  centerBox: true, // 截图框是否被限制在图片里面
  infoTrue: true, // true 为展示真实输出图片宽高 false 展示看到的截图框宽高
  accept: 'image/jpeg,image/jpg,image/png,image/gif,image/x-icon',
});

const getStyle = ref<IStyle>({
  width: '',
  height: '',
});

/* 允许上传的类型 */
const acceptType = ref<string[]>([]);

// 裁剪后的预览样式信息
const previews: any = ref({});
const previewFileStyle = ref({});

// 裁剪组件Ref
const cropperRef: any = ref({});
// input组件Ref
const reuploadInput = ref<HTMLElement | null | undefined>();

// 回显图片使用的方法
const onChange = (e: any) => {
  const file = e.target.files[0];
  const URL = window.URL || window.webkitURL;
  // 上传图片前置钩子，用于判断限制类型用
  if (beforeUploadEvent(file)) {
    options.img = URL.createObjectURL(file);
    dialogVisible.value = true;
  }
};
//上传图片前置拦截函数
const beforeUploadEvent = (file: File) => {
  const size = file.size / 1024 / 1024; // 大小M
  const type = file.name.substring(file.name.lastIndexOf('.') + 1); // 获得图片上传后缀
  // 判断是否符合上传类型
  const isAllowTye = props.allowTypeList.some((item) => {
    return item === type;
  });
  if (!isAllowTye) {
    ElMessage.error(`仅支持上传${acceptType.value.join('、')}格式的图片`);
    return false;
  }
  if (size > props.limitSize) {
    ElMessage.error(`仅支持上传${props.limitSize}M以内的图片`);
    return false;
  }
  return true;
};

// 重置裁剪组件
const refreshCrop = () => {
  // cropperRef裁剪组件自带很多方法，可以打印看看
  cropperRef.value.refresh();
};

// 右旋转图片
const rotateRight = () => {
  cropperRef.value.rotateRight();
};

// 放大缩小图片比例
const changeScale = (num: number) => {
  const scale = num || 1;
  cropperRef.value.changeScale(scale);
};

// 缩放的格式
const tempScale = ref<number>(0);

// 点击上传
const uploadFile = (type: string): void => {
  /* 打开新的上传文件无需生成新的input元素 */
  if (type === 'reupload') {
    reuploadInput.value?.click();
    return;
  }
  let input: HTMLInputElement | null = document.createElement('input');
  input.type = 'file';
  input.accept = options.accept;
  input.onchange = onChange;
  input.click();
  input = null;
};

// 图片转file文件
const dataURLtoFile = (dataurl: string, filename: string) => {
  let arr = dataurl.split(',');
  let mime = arr[0].match(/:(.*?);/)[1];
  let suffix = mime.split('/')[1];
  let bstr = atob(arr[1]);
  let n = bstr.length;
  let u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], `${filename}`, {
    type: suffix,
  });
};

// 上传图片（点击保存按钮）
const onConfirm = () => {
  if (props.type === 'Base64') {
    cropperRef.value.getCropData(async (data: string) => {
      emits('getCropData', data);
    });
  } else if (props.type === 'Blob') {
    cropperRef.value.getCropBlob(async (data: string) => {
      emits(
        'getCropData',
        URL.createObjectURL(new Blob([data], { type: 'image' })),
      );
    });
  } else {
    cropperRef.value.getCropData(async (data: string) => {
      const dataFile: File = dataURLtoFile(data, 'image');
      emits('getCropData', dataFile);
    });
  }
  dialogVisible.value = false;
};

// 裁剪之后的数据
const previewHandle = (data: any) => {
  previews.value = data; // 预览img图片
  tempScale.value = Number(props.previewWidth) / data.w;
  previewFileStyle.value = {
    width: data.w + 'px',
    height: data.h + 'px',
    margin: 0,
    overflow: 'hidden',
    zoom: tempScale.value,
    position: 'relative',
    border: '1px solid #e8e8e8',
    'border-radius': '2px',
  };
};

watch(
  () => props,
  () => {
    /* 预览样式 */
    getStyle.value = {
      width: props.previewWidth + 'px', // 预览宽度
      height: Number(props.previewWidth) / props.fixedNumber[1] + 'px', // 预览高度
    };
    // 上传格式tips信息
    acceptType.value = [];
    for (let i = 0; i < props.allowTypeList.length; i++) {
      acceptType.value.push(props.allowTypeList[i].toUpperCase());
    }
  },
  {
    deep: true,
  },
);

/* 向子组件抛出上传事件 */
defineExpose({
  uploadFile,
});
</script>
<style scoped>
.cropper {
  width: 100%;
  height: 50vh;
  display: flex;
  overflow: hidden;
}
.cropper_left {
  display: flex;
  flex-direction: column;
}
.reupload_box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
}
.reupload_text {
  color: var(--primary-color);
  cursor: pointer;
}
.rotate_right {
  margin-left: 16px;
  cursor: pointer;
}
.cropper_right {
  flex: 1;
  margin-left: 44px;
}
.preview_text {
  margin-bottom: 12px;
}
.previewImg {
  max-width: none;
}
</style>
