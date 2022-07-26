import { createApp } from 'vue'
import { createPinia } from "pinia"
import "./service/axios_demo.ts"
import App from './App.vue'
// import router from "./router"
import { globalCmp } from './global'

const app = createApp(App)

app.use(globalCmp)  // 注册全局组件
// app.use(router)
app.use(createPinia())
app.mount('#app')