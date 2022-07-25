import { createApp } from 'vue'
import { createPinia } from "pinia"

import App from './App.vue'
import router from "./router"
import { globalCmp } from './global'

const app = createApp(App)

app.use(globalCmp)
app.use(router).use(createPinia())
app.mount('#app')