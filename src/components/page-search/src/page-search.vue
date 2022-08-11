<template>
  <div class="page-search">
    <hy-form v-bind="props.searchFormConfig" :formData="formData">
      <template #header>
        <h2 class="header">高级检索</h2>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button @click="handleResetClick">重置</el-button>
          <el-button @click="handleQuery" type="primary">搜索</el-button>
        </div>
      </template>
    </hy-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import HyForm from "@/base-ui/form"

const props = defineProps({
  searchFormConfig: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['resetBtnClick', 'queryBtnClick'])

// search中双向绑定的属性应该由配置中的field来决定
const formItems = props.searchFormConfig.formItems
const formInitData: any = {}
for (const item of formItems) {
  formInitData[item.field] = ''
}

const formData = ref({ ...formInitData })

// 当用户点击重置
const handleResetClick = () => {
  formData.value = { ...formInitData }
  emit('resetBtnClick')
}

// 当用户点击搜索
const handleQuery = () => {
  emit('queryBtnClick', formData.value)
}

</script>

<style scoped lang="less">
.header {
  color: red;
}

.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>