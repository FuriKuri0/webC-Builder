import { ref } from 'vue'
import { defineStore } from 'pinia'
//代码模块  setCode
export const useCodeStore = defineStore(
  'code',
  () => {
    const code = ref('')
    const name = ref('')
    const setCode = (newCode: string) => {
      code.value = newCode
    }
    const setName = (neName: string) => {
      name.value = neName
    }
    const removeCode = () => {
      code.value = ''
    }
    const removeName = () => {
      name.value = ''
    }
    return { code, name, setCode, setName, removeCode, removeName }
  },
  {
    persist: true
  }
)
