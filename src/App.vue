<template>
  <div>
    {{ name }}
        <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <el-button>中文</el-button>
  </div>
</template>

<script setup lang="ts">
  import { useStore } from "./store"
  import { storeToRefs } from "pinia"

  const store = useStore()

  const { name } = storeToRefs(store)

</script>

<style scoped>

</style>
