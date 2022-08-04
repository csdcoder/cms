import { createRouter, createWebHistory } from "vue-router"
import type { RouteRecordRaw } from "vue-router"
import localCache from "@/utils/cache"

const routes: Readonly<RouteRecordRaw[]> = [
  {
    path:"/",
    redirect: "/main"
  },
  {
    path:"/login",
    component: () => import("@/views/login/login.vue")
  },  
  {
    path:"/main",
    component: () => import("@/views/main/main.vue")
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

router.beforeEach((to) => {
  if(to.path !== "/login") {
    const token = localCache.getCache("token")
    if(!token) {
      return "/login"
    }
  }
})

export default router