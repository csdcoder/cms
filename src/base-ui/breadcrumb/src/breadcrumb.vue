<template>
  <div class="nav-breadcrumb">
    <el-breadcrumb separator="/">
      <template v-for="item in props.breadcrumbs" :key="item.name">
        <el-breadcrumb-item to="">{{ item.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>
<script setup lang="ts">
import { PropType } from "vue"
import { IBreadcrumb } from "../types"

const props = defineProps({
  breadcrumbs: {
    type: Array as PropType < IBreadcrumb[] > ,
    default: () => []
  }
})
</script>