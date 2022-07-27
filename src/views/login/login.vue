<template>
  <div class="login">
    <login-panel />
  </div>
</template>

<script setup lang="ts" name="login">
import LoginPanel from "./cpns/login-panel.vue"
</script>

<style scoped lang="less" name="login">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url("../../assets/img/login-bg.svg");
}
</style>