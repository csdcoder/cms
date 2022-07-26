import type { App } from "vue"
// 测试用例
// import login from "../components/login.vue"

// 全局注册的组件
const components: any[] = [
  // login
]

export default function(app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}