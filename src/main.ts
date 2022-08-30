import { createApp } from 'vue'
import App from './App.vue'
// import { globalRegister } from './global'

import router from './router'
import store from './store'
import '@/assets/css/normal.css'
import '@/assets/css/index.less'

const app = createApp(App)
app.use(store).use(router).mount('#app')

// zyRequest.request({
//   url: '/home/multidata',
//   interceptors: {
//     requestInterceptor: (config) => {
//       console.log('单独的请求拦截')
//       return config
//     },
//     responseInterceptor: (res) => {
//       console.log('单独的响应拦截')
//       return res
//     }
//   }
// })
