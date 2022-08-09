<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />
    <div class="content">
      <hy-table :listData="userList" :propsList="propsList">
        <template #status="scope">
          <el-button>{{ scope.row.enable ? "启用" : "禁用" }}</el-button>
        </template>
        <template #createAt="scope">
          <strong>{{ scope.row.createat }}</strong>
        </template>
      </hy-table>
    </div>
  </div>
</template>

<script setup lang="ts" name="user">
import PageSearch from "@/components/page-search"
import { searchFormConfig } from "./config/search.config";
import { systemStore } from "@/store/main/system/system";
import { storeToRefs } from "pinia";
import HyTable from "@/base-ui/table";

const store = systemStore()
store.getPageList({
  pageUrl: "/users/list",
  queryInfo: {
    offset: 0,
    size: 10,
    // name: "coderwhy1"
  }
})

const { userList, userCount } = storeToRefs(store)

const propsList = [
  { prop: 'name', label: '用户名', minWdith: '100' },
  { prop: 'realname', label: '真实姓名', minWdith: '100' },
  { prop: 'cellphone', label: '手机号码', minWdith: '100' },
  { prop: 'enable', label: '状态', minWdith: '100', slotName: "status" },
  { prop: 'createat', label: '创建时间', minWdith: '100', slotName: "createAt" },
  { prop: 'updateat', label: '更新时间', minWdith: '100', slotName: "updateAt" }
]

</script>

<style scoped lang="less">
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>