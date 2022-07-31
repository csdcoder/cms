import { defineStore } from "pinia"
import { ref } from "vue"

import { accountLoginRequest } from "@/service/login/login"
import { IAccount } from "@/service/login/type"

export const loginStore = defineStore("login", () => {
  const token = ref("")
  const userInfo = ref({})

  const accountLoginAction = async (payload: IAccount) => {
    // 1.实现登录逻辑
    const loginResult = await accountLoginRequest(payload)
    console.log(loginResult)
  }

  const phoneLoginAction = async (payload: any) => {
    console.log("执行phoneLoginAction", payload)
  }


  return {
    token,
    userInfo,
    accountLoginAction,
    phoneLoginAction
  }
})
