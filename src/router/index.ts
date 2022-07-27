import { createRouter, createWebHistory } from "vue-router"
import type { RouteRecordRaw } from "vue-router"

const routes: Readonly<RouteRecordRaw[]> = [
  {
    path:"/",
    redirect: "/login"
  },
  {
    path:"/login",
    component: () => import("/src/views/login/login.vue")
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router