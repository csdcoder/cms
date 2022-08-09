import type { App } from "vue"
// 测试用例
// import login from "../components/login.vue"
import {
  ElForm, ElFormItem, ElInput,
  ElTabs, ElTabPane, ElIcon, ElCheckbox, ElLink, ElButton,
  ElAlert, 
  ElContainer, ElAside, ElHeader, ElMain,
  ElMenu, ElSubMenu, ElMenuItemGroup, ElMenuItem,
  ElDropdown, ElDropdownItem, ElDropdownMenu,
  ElCol, ElRow,
  ElSelect, ElOption,
  ElDatePicker, ElBreadcrumb, ElBreadcrumbItem,
  ElTable, ElTableColumn,
} from "element-plus"

import { Iphone, Setting, Files, Goods } from '@element-plus/icons-vue'

// 全局注册的组件
const components: any[] = [
  ElForm, ElFormItem, ElInput,
  ElTabs, ElTabPane, ElIcon, ElCheckbox, ElLink, ElButton,
  ElAlert, 
  ElContainer, ElAside, ElHeader, ElMain,
  ElMenu, ElSubMenu, ElMenuItemGroup, ElMenuItem,
  Iphone, Setting, Files, Goods,
  ElDropdown, ElDropdownItem, ElDropdownMenu,
  ElCol, ElRow,
  ElSelect, ElOption,
  ElDatePicker, ElBreadcrumb, ElBreadcrumbItem,
  ElTable, ElTableColumn,

]

export default function(app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}