import { createApp } from 'vue'
import { createPinia } from "pinia"

import hyRequest from "./service"
import App from './App.vue'
// import router from "./router"
import { globalCmp } from './global'

const app = createApp(App)

app.use(globalCmp) // 注册全局组件
// app.use(router)
app.use(createPinia())
app.mount('#app')

hyRequest.request({
  url: "/",
  method: "POST",
  interceptors: {
    requestInterceptor: (config) => {
      console.log("单独请求的拦截")
      return config
    },
    responseInterceptor: (config) => {
      console.log("单独响应的拦截")
      return config
    },
  },
  showLoading: false,
})

