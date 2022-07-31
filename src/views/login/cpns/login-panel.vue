<template>
  <div class="login-panel">
    <h2 class="title">后台管理系统</h2>
    <el-tabs type="border-card" class="demo-tabs" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon>
              <Avatar />
            </el-icon><span>账号登录</span>
          </span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon>
              <Iphone />
            </el-icon><span>手机登录</span>
          </span>
        </template>
        <login-phone />
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link>忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-btn" @click="handleLoginClick">立即登录</el-button>
  </div>
</template>
<script setup lang="ts" name="login-panel">
import { ref } from "vue"
import { Avatar, Iphone } from '@element-plus/icons-vue'
import LoginAccount from "./login-account.vue"
import LoginPhone from "./login-phone.vue"

const isKeepPassword = ref(true)
const accountRef = ref<InstanceType<typeof LoginAccount>>()
// const phoneRef = ref<InstanceType<typeof LoginPhone>>()
const currentTab = ref('account')

const handleLoginClick = () => {
  if (currentTab.value === 'account') {
    accountRef.value?.loginAction(isKeepPassword.value)
  } else {
    console.log('phoneRef调用loginAction')
  }
}
</script>

<style scoped>
  .login-panel {
    margin-bottom: 150px;
    width: 320px;
  }

  .login-panel .title {
    text-align: center;
  }

  .demo-tabs>.el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
  }

  .demo-tabs .custom-tabs-label .el-icon {
    vertical-align: middle;
  }

  .demo-tabs .custom-tabs-label span {
    vertical-align: middle;
    margin-left: 4px;
  }

  .account-control {
    margin-top: 10px;
    vertical-align: middle;
    display: flex;
    justify-content: space-between;
  }

  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
</style>