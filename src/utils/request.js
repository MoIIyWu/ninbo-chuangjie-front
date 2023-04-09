import axios from 'axios'

const instance = axios.create({
  // baseURL: 'http://192.168.31.230:8080/api',
  baseURL: 'http://16af2f57.r7.vip.cpolar.cn/api',
  timeout: 5000,
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  (res) => {
    const { data, code, message } = res.data
    if (code == 200) {
      return {
        data,
      }
    } else {
      return Promise.reject(new Error(message))
    }
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default instance
