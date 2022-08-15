<template>
  <div class="page-content">
    <hy-table :listData="listData" :listCount="Number(dataCount)" v-bind="contentTableConfig" v-model:page="pageInfo">
      <!-- 1.header中的插槽 -->
      <template #headerHandler>
        <el-button type="primary" plain>新建用户</el-button>
      </template>

      <!-- 2.列中的插槽 -->
      <template #status="scope">
        <el-button size="small" :type="Number(scope.row.enable) ? 'success' : 'danger'">
          {{ Number(scope.row.enable) ? "启用" : "禁用" }}
        </el-button>
      </template>
      <template #createAt="scope">
        <strong>{{ scope.row.createAt }}</strong>
      </template>
      <template #handler="scope">
        <el-button size="small" :icon="Edit" text>编辑</el-button>
        <el-button size="small" :icon="Delete" text @click="handleDeleteClick(scope.row)">删除</el-button>
      </template>
      <!-- <template #image="scope">
        <el-image :src="scope.row.imgUrl" :preview-src-list="[scope.row.imgUrl]" style="width: 60px; height: 60px;"
          fit="cover" preview-teleported lazy hide-on-click-modal />
      </template> -->
      <template v-for="item in otherPropsSlots" :key="item.prop" #[item.slotName]="scope" >
        <slot :name="item.slotName" :row="scope.row"></slot>
      </template>
    </hy-table>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { computed } from "@vue/reactivity";
import HyTable from "@/base-ui/table";

import { systemStore } from "@/store/main/system/system";
// import { storeToRefs } from "pinia";

import { Delete, Edit } from '@element-plus/icons-vue'

const props = defineProps({
  contentTableConfig: {
    type: Object as any,
    required: true
  },
  pageName: {
    type: String,
    required: true
  }
})

const store = systemStore()

// 双向绑定pageInfo
const pageInfo = ref({ currentPage: 1, pageSize: 10 })
watch(pageInfo, () => getPageData())

// 发送网络请求
const getPageData = (queryInfo: any = {}) => {
  store.getPageList({
    pageName: props.pageName,
    queryInfo: {
      offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
      size: pageInfo.value.pageSize,
      ...queryInfo
    }
  })
}
getPageData()

const listData = computed(() =>
  store.pageListData(props.pageName)
)
// console.log(listData)
const dataCount = computed(() =>
  store.pageListCount(props.pageName)
)

// 获取其他的动态插槽
const defaultSlots = ['status', 'createAt', 'updateAt', 'handler']
const otherPropsSlots = props.contentTableConfig.propsList.filter(
  (item: any) => {
    if (defaultSlots.includes(item.slotName) || item.slotName === undefined) { return false }
    return true
  }
)

// 删除/编辑/新建操作
const handleDeleteClick = (item: any) => {
  console.log(item)
  store.deletePageData({
    pageName: props.pageName,
    id: item.id
  })
}

defineExpose({
  getPageData
})
</script>

<style scope lang="less">
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>