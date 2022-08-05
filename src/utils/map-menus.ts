import { RouteRecordRaw } from "vue-router"

export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  // 1.加载所有的routes
  const allRoutes: RouteRecordRaw[] = []
  const routeFiles = import.meta.glob("../router/main/**/*.ts", { eager: true }) // vite
  // console.log(routeFiles)
  for(const path in routeFiles) {
    const route: any = routeFiles[path] as any
    allRoutes.push(route.default)
  }

  // 2.根据菜单获取需要添加的routes
  const _recurseGetRoutes = (menus: any[]) => {
    for(const menu of menus) {
      if(menu.type == 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if(route) routes.push(route)        
      } else {
        _recurseGetRoutes(menu.children)
      }
    }
  }

  _recurseGetRoutes(userMenus)

  return routes
}