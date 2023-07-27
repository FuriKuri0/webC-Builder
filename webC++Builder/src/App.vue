<!--  -->

<script setup>
import RightSlider from './components/RightSlider/index.vue'
import Main from './components/Main/index.vue'
</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-header className="Header">Web编译器 </el-header>
      <el-container>
        <el-main className="Main"><Main></Main></el-main>
        <el-aside className="Right">
          <RightSlider></RightSlider>
        </el-aside>
      </el-container>
    </el-container>
  </div>
</template>
<style lang="scss" scoped>
.common-layout {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
.Main {
  width: calc(100vw - 300px);
  height: calc(100vh - 30px);
  padding-top: 10px;
}
.Header {
  width: 100vw;
  height: 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}
.Right {
  height: calc(100vh - 30px);
  width: 300px;
  padding: 0 30px;
  border-left: 1px solid rgba(0, 0, 0, 0.3);
}
</style>
