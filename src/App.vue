<template>
  <div>
    {{ name }}
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
  </div>
  <login></login>
</template>

<script setup lang="ts">
  import { useStore } from "./store"
  import { storeToRefs } from "pinia"
  import { ElButton } from "element-plus"

  const store = useStore()

  const { name } = storeToRefs(store)

</script>

<style scoped>

</style>
