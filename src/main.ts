import { createApp } from 'vue'
import App from './App.vue'
import { globalRegister } from './global'
import 'element-plus/dist/index.css'
import router from './router'
import store from './store'
import '@/assets/css/normal.css'
import '@/assets/css/index.less'

const app = createApp(App)
app.use(store).use(router).use(globalRegister).mount('#app')
