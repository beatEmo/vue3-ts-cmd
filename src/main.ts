import { createApp } from 'vue'
import App from './App.vue'
import { globalRegister } from './global'
import 'element-plus/dist/index.css'
import router from './router'
import store, { setupStore } from './store'
import '@/assets/css/normal.css'
import '@/assets/css/index.less'

setupStore()

const app = createApp(App)

console.log(app.config.globalProperties)

app.use(store).use(router).use(globalRegister).mount('#app')
