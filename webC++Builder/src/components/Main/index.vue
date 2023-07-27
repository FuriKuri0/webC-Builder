<!--  -->
<script setup>
import * as monaco from 'monaco-editor'
import {useCodeStore} from '@/stores/code'
import { onMounted, onBeforeUnmount, ref } from 'vue'
const {code,setCode,removeCode} = useCodeStore()
// 使用 `defineProps` 定义 props，如果需要的话
// import { defineProps } from 'vue';
// const props = defineProps(/* props 配置 */);
// 使用 `ref` 创建响应式引用
const editorRef = ref(null)
let editorInstance
// 在 `onMounted` 生命周期钩子中初始化 Monaco Editor
onMounted(() => {
  editorInstance = monaco.editor.create(editorRef.value, {
    value: code ||"Hello, World!",
  })
  editorInstance.onDidChangeModelContent(() => {
    const editorValue = editorInstance.getValue()
    setCode(editorValue)
  })
})

// 在 `onBeforeUnmount` 生命周期钩子中销毁 Monaco Editor 实例
onBeforeUnmount(() => {
  if (editorInstance) {
    editorInstance.dispose()
  }
})
</script>
<template>
  <div>
    <div className="editor" ref="editorRef" ></div>
  </div>
</template>

<style lang="scss" scoped>
  .editor {
    
  }
</style>
