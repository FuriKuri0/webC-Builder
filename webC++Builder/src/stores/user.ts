import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
//用户模块 token setTkoen
export const useUserStore = defineStore(
  'user',
  () => {
    const token = ref('')
    const setToken = (newToken: string) => {
      token.value = newToken
    }
    const removeToken = () => {
      token.value = ''
    }

    return { token, setToken, removeToken }
  },
  {
    persist: true
  }
)
