<template>
  <div style="border: 1px solid #ccc">
    <toolBarComponent
      v-if="toolBarComponent"
      :is="toolBarComponent"
      style="border-bottom: 1px solid #ccc"
      :editor="editorRef"
      :defaultConfig="toolbarConfig"
      :mode="mode"
    />
    <editorComponent
      v-if="editorComponent"
      :is="editorComponent"
      style="height: 500px; overflow-y: hidden"
      v-model="valueHtml"
      :defaultConfig="editorConfig"
      :mode="mode"
      @onCreated="handleCreated"
    />
  </div>
</template>

<script setup name="DRichTextEditor">
import '@wangeditor/editor/dist/css/style.css'; // 引入 css

import { onBeforeUnmount, ref, shallowRef, onMounted } from 'vue';
const editorComponent = ref(null)
const toolBarComponent = ref(null)

defineOptions({
  name: 'DRichTextEditor',
});

const props = withDefaults(defineProps(), {
  mode:'default', // 或 'simple'
});

// 编辑器实例，必须用 shallowRef
    const editorRef = shallowRef();

    // 内容 HTML
    const valueHtml = ref('<p>hello</p>');
    
    // 模拟 ajax 异步获取内容
    onMounted(async() => {
      const module = await import('@wangeditor/editor-for-vue')
      editorComponent.value = module.Editor
      toolBarComponent.value = module.Toolbar
      console.log('module',module);
      
      setTimeout(() => {
        valueHtml.value = '<p>模拟 Ajax 异步设置内容</p>';
      }, 1500);
    });

    const toolbarConfig = {};
    const editorConfig = { placeholder: '请输入内容...' };

    // 组件销毁时，也及时销毁编辑器
    onBeforeUnmount(() => {
      const editor = editorRef.value;
      if (editor == null) return;
      editor.destroy();
    });

    const handleCreated = (editor) => {
      editorRef.value = editor; // 记录 editor 实例，重要！
      // editorRef.value = Object.seal(editor)
    };

  //   return {
  //     editorComponent,
  //     toolBarComponent,
  //     editorRef,
  //     valueHtml,
  //     mode: 'default', // 或 'simple'
  //     toolbarConfig,
  //     editorConfig,
  //     handleCreated,
  //   };
  // },
// };
</script>

<style lang="less" scoped></style>
