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


interface DataType {
  data: any
  returnCode: string
  success: boolean
}

hyRequest.request<DataType>({
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
  showLoading: true,
}).then((res) => {
  console.log(res)
  console.log(res.data)
  console.log(res.returnCode)
  console.log(res.success)
}).catch((err) => {
  console.log(err)
})

