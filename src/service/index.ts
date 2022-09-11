// service统一出口
import ZYRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
import localCache from '@/utils/cache'

const zyRequest = new ZYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 让这个实例发送的请求都 带token
      const token = localCache.getCache('token')

      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      // console.log('请求成功')
      return config
    },
    requestInterceptorCatch: (err) => {
      // console.log('请求失败')
      return err
    },
    responseInterceptor: (response) => {
      // console.log('响应成功')
      return response
    },
    responseInterceptorCatch: (err) => {
      // console.log('响应失败')
      return err
    }
  }
})

export default zyRequest
