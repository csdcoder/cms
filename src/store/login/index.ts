import { defineStore } from "pinia"
// import { ref } from "vue"

import { accountLoginRequest, requestUserInfoById, requestUserMenusByRoleId } from "@/service/login/login"
import localCache from "@/utils/cache"

import { IAccount } from "@/service/login/type"
import router from "@/router"
import { mapMenusToRoutes } from "@/utils/map-menus"
export const loginStore = defineStore("login", {
  state: () => {
    return {
      token: '',
      userInfo: {} as any,
      isAuth: true,
      userMenus: [] as any
    }
  },
  actions: {
    changeUserMenus(userMenus:any) {
      this.userMenus = userMenus
      const routes = mapMenusToRoutes(this.userMenus)
      routes.forEach((route) => {
        router.addRoute("main", route)
      })
      // console.log(routes)
    },

    async accountLoginAction(payload: IAccount) {
      // 1.实现登录逻辑
      const loginResult = await accountLoginRequest(payload)
      if(typeof loginResult == "string") {  // 用户名或者密码错误，后台返回字符串提示信息
        this.isAuth = false
        // console.log(loginResult)
        console.log("验证失败")
        return false
      }
      this.isAuth = true   // 重置
      // console.log(loginResult)
      const { id, token } = loginResult.data
      this.token = token
      localCache.setCache("token", token)

      // 2.请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      // console.log(userInfoResult)
      // console.log(userInfoResult)
      this.userInfo = userInfoResult.data
      // console.log(this.userInfo)
      localCache.setCache("userInfo", this.userInfo)

      // 3.请求用户菜单
      // console.log(this.userInfo)
      const userMenusResult = await requestUserMenusByRoleId(this.userInfo.role.id)
      // console.log(userMenusResult)
      this.changeUserMenus(userMenusResult)
      localCache.setCache("userMenus", this.userMenus)
      mapMenusToRoutes(this.userMenus)

      // 4.调到首页
      router.push("/main")
    },

    async phoneLoginAction(payload: any) {
      console.log("执行phoneLoginAction", payload)
    },

    loadLocalLogin() {
      const token = localCache.getCache('token')
      if(token) {
        this.token = token
      }
      const userInfo = localCache.getCache('userInfo')
      if(userInfo) {
        this.userInfo = userInfo
      }      
      const userMenus = localCache.getCache('userMenus')
      if(userMenus) {
        this.changeUserMenus(userMenus)
      }

    }

  }


})