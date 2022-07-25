import { createRouter, createWebHistory } from "vue-router"
import type { RouteRecordRaw } from "vue-router"

const routes: Readonly<RouteRecordRaw[]> = [

]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router