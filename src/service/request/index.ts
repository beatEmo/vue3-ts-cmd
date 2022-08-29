import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { ZYRequestConfig, ZYRequestInterceptors } from './type'
import { ElLoading } from 'element-plus'
import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'

class ZYRequest {
  instance: AxiosInstance
  interceptors?: ZYRequestInterceptors
  showLoading?: boolean
  loading?: LoadingInstance

  constructor(config: ZYRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? true

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 添加所有实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('所有实例拦截器：请求拦截成功')
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: false,
            text: '请求中。。。',
            background: 'rgba(0,0,0,0.5)'
          })
        }
        return config
      },
      (err) => {
        console.log('所有实例拦截器：请求拦截失败')
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        // 拿到响应就把loding关掉
        this.loading?.close()
        const { data } = res
        // 状态码仍为2xx的错误响应拦截
        if (data.returnCode === '-1001') {
          console.log('请求失败')
        } else {
          console.log('所有实例拦截器：响应拦截成功')
          return data
        }
      },
      (err) => {
        // 拿到响应就把loding关掉
        this.loading?.close()
        // 一般这里可通过服务器返回的错误码 判断错误
        switch (err.response.status) {
          case 404:
            console.log('404')
            break
        }
        console.log('所有实例拦截器：响应拦截失败')
        return err
      }
    )
  }

  request<T>(config: ZYRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 1、请求单个数据的处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          console.log(res)
          // 2、将showloading设置为true不会影响下一次请求
          this.showLoading = true
          // 3、将数据返回
          resolve(res)
        })
        .catch((err) => {
          this.showLoading = true
          reject(err)
        })
    })
  }

  get<T>(config: ZYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T>(config: ZYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'post' })
  }

  put<T>(config: ZYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'put' })
  }

  delete<T>(config: ZYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'delete' })
  }
}

export default ZYRequest
