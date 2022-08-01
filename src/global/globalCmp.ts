import type { App } from "vue"
// 测试用例
// import login from "../components/login.vue"
import {
  ElForm,
  ElFormItem,
  ElInput,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElCheckbox,
  ElLink,
  ElButton,
  ElAlert
} from "element-plus"

// 全局注册的组件
const components: any[] = [
  ElForm, ElFormItem, ElInput,
  ElTabs, ElTabPane, ElIcon, ElCheckbox, ElLink, ElButton,
  ElAlert
]

export default function(app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}