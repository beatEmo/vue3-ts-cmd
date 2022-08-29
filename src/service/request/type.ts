import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface ZYRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (config: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface ZYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: ZYRequestInterceptors<T>
  showLoading?: boolean
}
