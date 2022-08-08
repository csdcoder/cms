<template>
  <div class="user-info">
    <el-dropdown>
      <span class="el-dropdown-link">
        {{ username }}
        <el-icon class="el-icon--right"><arrow-down /></el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>退出登录</el-dropdown-item>
          <el-dropdown-item divided>用户信息</el-dropdown-item>
          <el-dropdown-item>系统管理</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
  import { ArrowDown } from '@element-plus/icons-vue'
  import { loginStore } from "@/store/login"
  // import { storeToRefs } from "pinia"

  const store = loginStore()
  const username = store.userInfo.name
</script>

<style scope>
  .el-dropdown-link {
    cursor: pointer;
    color: var(--el-color-primary);
    display: flex;
    align-items: center;
  }
</style>