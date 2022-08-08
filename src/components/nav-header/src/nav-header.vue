<template>
  <div class="nav-header">
    <el-icon class="fold-menu" @click="handleFoldClick">
      <component :is="isFold ? Expand : Fold" />
    </el-icon>
    <div class="content">
      <hy-breadcrumb :breadcrumbs="breadcrumbs" />
      <user-info />
    </div>
  </div>
</template>

<script setup lang="ts" name="nav-header">
  import { ref, computed } from "vue" 
  import { Fold, Expand } from '@element-plus/icons-vue'
  import UserInfo from "./user-info.vue"
  import HyBreadcrumb from "@/base-ui/breadcrumb"
  import { pathMapBreadcrumbs} from "@/utils/map-menus"
  import { loginStore } from "@/store/login"
  import { useRoute } from "vue-router"

  const emit = defineEmits(["foldChange"])
  const isFold = ref(false)
  const handleFoldClick = () => {
    isFold.value = !isFold.value
    emit("foldChange", isFold.value)
  }

  // 面包屑
  const store = loginStore()
  const breadcrumbs = computed(() => {
    const { userMenus } = store
    const route = useRoute()
    const currentPath = route.path
    return pathMapBreadcrumbs(userMenus, currentPath)
  })

</script>

<style scoped lang="less">
  .nav-header {
    display: flex;
    width: 100%;

    .fold-menu {
      font-size: 25px;
      cursor: point;
    }
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
</style>