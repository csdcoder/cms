<template>
  <div class="page-search">
    <hy-form v-bind="props.searchFormConfig" :formData="formData">
      <template #header>
        <h2 class="header">高级检索</h2>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button>重置</el-button>
          <el-button type="primary">搜索</el-button>
        </div>
      </template>
    </hy-form>
  </div>
</template>
<script setup lang="ts">
import { reactive } from "vue"
import HyForm from "@/base-ui/form"


const props = defineProps({
  searchFormConfig: {
    type: Object,
    required: true
  }
})

const formData = reactive({
  id: "",
  name: "",
  password: "",
  sport: "",
  createTime: ""
})
</script>
<style scope>
.header {
  color: red;
}

.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>