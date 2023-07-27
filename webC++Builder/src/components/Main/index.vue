<!--  -->
<script setup>
import * as monaco from 'monaco-editor'
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker'
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'

import { onMounted, onBeforeUnmount, ref } from 'vue'
// @ts-ignore
self.MonacoEnvironment = {
  getWorker: function (_, label) {
    console.log(label)
    if (label === 'json') {
      return new jsonWorker()
    }
    new editorWorker()
  }
}

// 使用 `defineProps` 定义 props，如果需要的话
// import { defineProps } from 'vue';
// const props = defineProps(/* props 配置 */);

// 使用 `ref` 创建响应式引用
const editorRef = ref(null)
let editorInstance
// 在 `onMounted` 生命周期钩子中初始化 Monaco Editor
onMounted(() => {
  editorInstance = monaco.editor.create(editorRef.value, {
    value: "console.log('Hello, Monaco Editor from Vue 3!');",
    language: 'javascript'
  })
  editorInstance.onDidChangeModelContent(() => {
    const editorValue = editorInstance.getValue()
    console.log('Editor Value:', editorValue)
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
    <div ref="editorRef" style="height: 100px"></div>
  </div>
</template>

<style lang="scss" scoped></style>
