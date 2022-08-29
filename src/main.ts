import { createApp } from 'vue'
import App from './App.vue'
import { globalRegister } from './global'

import router from './router'
import store from './store'

import zyRequest from './service'

const app = createApp(App)
app.use(globalRegister).use(store).use(router).mount('#app')

zyRequest.request({
  url: '/home/multidata',
  interceptors: {
    requestInterceptor: (config) => {
      console.log('单独的请求拦截')
      return config
    },
    responseInterceptor: (res) => {
      console.log('单独的响应拦截')
      return res
    }
  }
})
