<template>
  <div class="login-account">
    <!-- :model可以将account的值告知el-form，从而实现监控 -->
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts" name="login-account">
import { reactive, ref } from "vue"
import { ElForm } from "element-plus"
import localCache from "../../../utils/cache"

import { rules } from "../config/account-config"

const account = reactive({
  name: localCache.getCache("name") ?? "",
  password: localCache.getCache("password") ?? ""
})

const formRef = ref<InstanceType<typeof ElForm>>()

const loginAction = (isKeepPassword: boolean) => {
  // 表单内容通过验证才可以执行登录
  formRef.value?.validate((valid) => {
    if(valid) {
      // 1. 判断是否需要记住密码
      if(isKeepPassword) {
        // 本地缓存
        localCache.setCache("name", account.name)
        localCache.setCache("password", account.password)
      } else {
        localCache.deleteCache("name", "password")
      }
      // 2. 开始进行登录验证
    }
  })
}

// 通过defineExpose暴露当前组件方法
defineExpose({
  loginAction
})
</script>