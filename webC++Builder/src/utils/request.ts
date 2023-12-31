import axios from 'axios'
import { ElMessage } from 'element-plus'
// 添加实例
const instance = axios.create({
  baseURL: 'http://39.98.41.126:31126/',
  timeout: 10000
})
// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    if (response.data.code !== 200) {
      ElMessage.error(response.data.message || '服务异常')
      return Promise.reject('error')
    }
    return response
  },
  function (error) {
    // 对响应错误做点什么
    ElMessage.error(error.response.data.message || '服务异常')
    return Promise.reject(error)
  }
)
export default instance
