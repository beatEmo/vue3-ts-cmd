/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// 声明自定义的环境变量参数
declare const VUE_APP_BASE_URL: string
declare const VUE_APP_BASE_NAME: string
