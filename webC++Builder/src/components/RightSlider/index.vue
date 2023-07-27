<!--  -->
<script setup>
import {useCodeStore} from '@/stores/code'
import { onMounted, onBeforeUnmount, ref } from 'vue'
import {run} from '@/utils/api'
const {code,setCode,removeCode,name,setName} = useCodeStore()
const response = ref('')
const  myRun = async () => {
 const {data:{data}} = await run(code,name)
 response.value = data
}
</script>
<template>
  <div class="coolinput">
    <label for="input" class="text">Name:</label>
    <input type="text" placeholder="Write here..." :value="name" @input="(e)=>setName(e.target.value)" name="input" class="input" />
  </div>
  <button @click="myRun" class="btn-shine">
    <span >RUN</span>
  </button>
  <div class="card">
  <div class="bg">{{ response }}</div>
  <div class="blob"></div>
</div>
</template>

<style lang="scss" scoped>
.coolinput {
  display: flex;
  justify-self: center;
  flex-direction: column;
  width: fit-content;
  position: static;
  width: 270px;
  label.text {
    font-size: 0.75rem;
    color: #818cf8;
    font-weight: 700;
    position: relative;
    top: 0.5rem;
    margin: 0 0 0 7px;
    padding: 0 3px;
    background: white;
    width: fit-content;
  }
  input[type='text'].input {
    padding: 11px 10px;
    font-size: 0.75rem;
    border: 2px #818cf8 solid;
    border-radius: 5px;
    background: white;
    input[type='text'].input:focus {
      outline: none;
    }
  }
}
.btn-shine {
  position: relative;
  margin: 20px 0px;
  padding: 17px 35px;
  outline: none;
  text-decoration: none;
  display: flex;
  justify-content: center;
  justify-self: center;
  align-items: center;
  cursor: pointer;
  text-transform: uppercase;
  background-color: #fff;
  border: 1px solid rgba(22, 76, 167, 0.6);
  border-radius: 10px;
  color: #1d89ff;
  font-weight: 400;
  font-family: inherit;
  z-index: 0;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);
  width: 270px;
  height: 45px;
  border: 1px solid;
  overflow: hidden;
  position: relative;
  span {
  color: #164ca7;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.7px;
}
span {
  z-index: 20;
}
&:hover {
  animation: rotate624 0.7s ease-in-out both;
}
&:hover span {
  animation: storm1261 0.7s ease-in-out both;
  animation-delay: 0.06s;
}
&:after {
  background: #38ef7d;
  content: '';
  height: 155px;
  left: -75px;
  opacity: 0.4;
  position: absolute;
  top: -50px;
  transform: rotate(35deg);
  transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
  width: 50px;
  z-index: -10;
}

&:hover:after {
  left: 120%;
  transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
}
}


@keyframes rotate624 {
  0% {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }

  25% {
    transform: rotate(3deg) translate3d(0, 0, 0);
  }

  50% {
    transform: rotate(-3deg) translate3d(0, 0, 0);
  }

  75% {
    transform: rotate(1deg) translate3d(0, 0, 0);
  }

  100% {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }
}

@keyframes storm1261 {
  0% {
    transform: translate3d(0, 0, 0) translateZ(0);
  }

  25% {
    transform: translate3d(4px, 0, 0) translateZ(0);
  }

  50% {
    transform: translate3d(-3px, 0, 0) translateZ(0);
  }

  75% {
    transform: translate3d(2px, 0, 0) translateZ(0);
  }

  100% {
    transform: translate3d(0, 0, 0) translateZ(0);
  }
}


.card {
  position: relative;
  width: 270px;
  height: calc(100vh - 200px);
  border-radius: 14px;
  z-index: 1111;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.bg {
  position: absolute;
  top: 5px;
  left: 5px;
  width: 260px;
  height: calc(100vh - 190px);
  z-index: 2;
  background: rgba(255, 255, 255, .95);
  backdrop-filter: blur(24px);
  border-radius: 10px;
  overflow: hidden;
  outline: 2px solid white;
  white-space: pre-line;
  font-size:18px;
  text-align:center
}

.blob {
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  width: 220px;
  height: calc(100vh - 300px);
  border-radius: 50%;
  background-color: #ff0000;
  opacity: 1;
  filter: blur(12px);
  animation: blob-bounce 5s infinite ease;
}

@keyframes blob-bounce {
  0% {
    transform: translate(-100%, -100%) translate3d(0, 0, 0);
  }

  25% {
    transform: translate(-100%, -100%) translate3d(100%, 0, 0);
  }

  50% {
    transform: translate(-100%, -100%) translate3d(100%, 100%, 0);
  }

  75% {
    transform: translate(-100%, -100%) translate3d(0, 100%, 0);
  }

  100% {
    transform: translate(-100%, -100%) translate3d(0, 0, 0);
  }
}

</style>
