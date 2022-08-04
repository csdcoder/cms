import { createApp } from 'vue'
import { createPinia } from "pinia"
import "normalize.css"
import "./assets/css/index.less"

import App from './App.vue'
import router from "./router"
import { globalCmp } from './global'
import { setupStore } from "./store"

const app = createApp(App)

app.use(globalCmp) // 注册全局组件
app.use(router)
app.use(createPinia())
setupStore()

app.mount('#app')


