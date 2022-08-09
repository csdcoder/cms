<template>
  <div class="hy-table">
    <el-table :data="listData" border style="width: 100%">
      <template v-for="propItem in propsList" :key="propItem.prop">
        <el-table-column v-bind="propItem" align="center">
          <!-- scope.row获取当前行的数据 -->
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  listData: {
    type: Array,
    required: true
  },
  propsList: {
    type: Array as any,
    required: true
  }
})
</script>

<style scope lang="less">
</style>