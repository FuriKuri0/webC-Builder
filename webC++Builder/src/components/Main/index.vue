<!--  -->
<script setup>
import * as monaco from 'monaco-editor'
import { useCodeStore } from '@/stores/code'
import { onMounted, onBeforeUnmount, ref } from 'vue'
const { code, setCode, removeCode } = useCodeStore()
// 使用 `defineProps` 定义 props，如果需要的话
// import { defineProps } from 'vue';
// const props = defineProps(/* props 配置 */);
// 使用 `ref` 创建响应式引用
const editorRef = ref(null)
let editorInstance
// 在 `onMounted` 生命周期钩子中初始化 Monaco Editor
onMounted(() => {
  editorInstance = monaco.editor.create(editorRef.value, {
    value: code || 'Hello, World!',
    theme: 'transparentTheme',
    fontSize: 24
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
    <div className="editor" ref="editorRef"></div>
    <div class="container">
      <div class="bubbleBox">
        <div v-for="index in 5" className="bubble" :key="index">
          <span v-for="index in 5" :key="index"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bubbleBox {
  position: relative;
  top: -700px;
  left: 60%;
}
.editor {
  height: calc(100vh - 30px);
  width: 100%;
  font-size: 30px;
}

.bubble {
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  box-shadow: inset 0 0 25px rgba (255, 255, 255, 0.25);
  animation: animate_4010 8s ease-in-out infinite;
}

.bubble:nth-child(2) {
  position: relative;
  zoom: 0.45;
  left: -10px;
  top: -100px;
  animation-delay: -4s;
}

.bubble:nth-child(3) {
  position: relative;
  zoom: 0.45;
  right: -80px;
  top: -300px;
  animation-delay: -6s;
}

.bubble:nth-child(4) {
  position: relative;
  zoom: 0.35;
  left: -120px;
  bottom: -200px;
  animation-delay: -3s;
}

.bubble:nth-child(5) {
  position: relative;
  zoom: 0.5;
  left: 0px;
  top: 200px;
  animation-delay: -5s;
}

@keyframes animate_4010 {
  0%,
  100% {
    transform: translateY(-20px);
  }

  50% {
    transform: translateY(20px);
  }
}

.bubble::before {
  content: '';
  position: absolute;
  top: 50px;
  left: 45px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #fff;
  z-index: 10;
  filter: blur(2px);
}

.bubble::after {
  content: '';
  position: absolute;
  top: 80px;
  left: 80px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #fff;
  z-index: 10;
  filter: blur(2px);
}

.bubble span {
  position: absolute;
  border-radius: 50%;
}

.bubble span:nth-child(1) {
  inset: 10px;
  border-left: 15px solid #0fb4ff;
  filter: blur(8px);
}

.bubble span:nth-child(2) {
  inset: 10px;
  border-right: 15px solid #ff4484;
  filter: blur(8px);
}

.bubble span:nth-child(3) {
  inset: 10px;
  border-top: 15px solid #ffeb3b;
  filter: blur(8px);
}

.bubble span:nth-child(4) {
  inset: 30px;
  border-left: 15px solid #ff4484;
  filter: blur(12px);
}

.bubble span:nth-child(5) {
  inset: 10px;
  border-bottom: 10px solid #fff;
  filter: blur(8px);
  transform: rotate(330deg);
}
</style>
