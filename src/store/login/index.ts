import { defineStore } from "pinia"
import { ref } from "vue"

import { accountLoginRequest, requestUserInfoById } from "@/service/login/login"
import localCache from "@/utils/cache"
import { IAccount } from "@/service/login/type"

export const loginStore = defineStore("login", () => {
  // const token = ref("")
  const userInfo = ref({})
  const isAuth = ref(true)  // 验证通过否，默认为false，失败时提示用户名或密码错误

  const accountLoginAction = async (payload: IAccount) => {
    // 1.实现登录逻辑
    const loginResult = await accountLoginRequest(payload)
    if(typeof loginResult == "string") {  // 用户名或者密码错误，后台返回字符串提示信息
      isAuth.value = false
      console.log(loginResult)
      console.log("验证失败")
      return false
    }
    isAuth.value = true   // 重置
    const { id, token } = loginResult.data
    // token.value = token_str
    localCache.setCache("token", token)

    // 2.请求用户信息
    const userInfoResult = await requestUserInfoById(id)
    console.log(userInfoResult)
    const userInfo = userInfoResult
    localCache.setCache("userInfo", userInfo)
  }

  const phoneLoginAction = async (payload: any) => {
    console.log("执行phoneLoginAction", payload)
  }


  return {
    // token,
    userInfo,
    isAuth,
    accountLoginAction,
    phoneLoginAction
  }
})
