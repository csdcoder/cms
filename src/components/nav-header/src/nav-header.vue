<template>
  <div class="nav-header">
    <el-icon class="fold-menu" @click="handleFoldClick">
      <component :is="isFold ? Expand : Fold" />
    </el-icon>
  </div>
</template>

<script setup lang="ts" name="nav-header">
  import { ref } from "vue" 
  import { Fold, Expand } from '@element-plus/icons-vue'

  const emit = defineEmits(["foldChange"])
  const isFold = ref(false)
  const handleFoldClick = () => {
    isFold.value = !isFold.value
    emit("foldChange", isFold.value)
  }

</script>

<style scoped lang="less">
  .nav-header {
    .fold-menu {
      font-size: 25px;
      cursor: point;
    }
  }
</style>