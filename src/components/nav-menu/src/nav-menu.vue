<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="@/assets/img/logo.svg" alt="logo">
      <span v-if="!collapse" class="title"> Vue3+TS </span>
    </div>
    <el-menu
      default-active="2"
      class="el-menu-vertical"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
      :collapse="collapse"
    >
      <template v-for="item in userMenus" :key="item.id">
        <template v-if="item.type == 1">
          <el-sub-menu :index="item.id">
            <template #title>
              <el-icon><component v-bind:is="item.icon"></component></el-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item :index="subitem.id">
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </template>            
          </el-sub-menu>
        </template>
        <!-- 二级菜单 -->
        <template v-else-if="item.type == 2 ">
          <el-menu-item :index="item.id" >
            <!-- <el-icon v-if="item.icon"><component :is="item.icon"></component></el-icon> -->
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
        <template v-else></template>
      </template>
    </el-menu>
  </div>
</template>


<script setup lang="ts" name="nav-menu">
  import { loginStore } from "@/store/login"
  import { Iphone as iphone } from '@element-plus/icons-vue'

  const store = loginStore()
  const {userMenus} = store

  const props = defineProps({
    collapse: {
      type: Boolean,
      default: false
    }
  })

</script>


<style scoped lang="less">
  .nav-menu {
    height: 100%;
    background-color: #001529;

    .logo {
      display: flex;
      height: 28px;
      padding: 12px 10px 8px 0px;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;

      .img {
        height: 100%;
        margin: 0 10px;
      }

      .title {
        font-size: 16px;
        font-weight: 700;
        color: white;
      }
    }

    .el-menu {
      border-right: none;
    }

    .el-sub-menu {
      background-color: #001529 !important;

      .el-menu-item {
        padding-left: 50px !important;

        span {
          -webkit-user-select:none;
          -moz-user-select:none;
          -ms-user-select:none;
          user-select:none;
        }
      }
    }
    
    :deep .el-sub-menu__title {
      background-color: #001529 !important;
      padding-left: 13px !important;
      padding-right: 27px !important;

      .el-icon {
        padding-right: 7px;
      }

      .el-sub-menu__icon-arrow {
        padding-right: 0;
      }

      span {
        -webkit-user-select:none;
        -moz-user-select:none;
        -ms-user-select:none;
        user-select:none;
      }

    }

    .el-menu-item:hover {
      color: #fff !important; // 菜单
    }

    .el-menu-item.is-active {
      color: #fff !important;
      background-color: #0a60bd !important;
    }
  }

  .el-menu-vertical:not(.el-menu--collapse) {
    width: 100%;
    height: calc(100% - 48px);
  }

</style>