<template>
  <div class="hy-table">
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="handler">
          <slot name="headerHandler" />
        </div>
      </slot>
    </div>
    <el-table 
      :data="listData" 
      border 
      style="width: 100%" 
      @selection-change="handleSelectionChange"
      v-bind="childrenProps"
    >
      <el-table-column v-if="showSelectColumn" type="selection" align="center" width="60"></el-table-column>
      <el-table-column v-if="showIndexColumn" type="index" label="序号" align="center" width="60"></el-table-column>
      <template v-for="propItem in propsList" :key="propItem.prop">
        <el-table-column v-bind="propItem" align="center" show-overflow-tooltip>
          <!-- scope.row获取当前行的数据 -->
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer" v-if="showFooter">
      <slot name="footer">
        <el-pagination 
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :total="listCount"
          :current-page="page.currentPage"
          :page-size="page.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
        />
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  listData: {
    type: Array as PropType<any[]>,
    required: true
  },
  listCount: {
    type: Number,
    default: 0
  },
  propsList: {
    type: Array as any,
    required: true
  },
  showIndexColumn: {
    type: Boolean,
    default: false
  },
  showSelectColumn: {
    type: Boolean,
    default: false
  },
  page: {
    type: Object,
    default: () => ({ currentPage: 0, pageSize: 10})
  },
  childrenProps: {
    type: Object,
    default: () => ({})
  },
  showFooter: {
    type: Boolean,
    default: true
  }
})
// console.log(props.listData, "here")
const emit = defineEmits(['selectionChange', 'update:page'])
const handleSelectionChange = (value: any) => {
  emit('selectionChange', value)
}

const handleCurrentChange = (currentPage: number) => {
  emit('update:page', { ...props.page, currentPage })
}

const handleSizeChange = (pageSize: number) => {
  emit('update:page', { ...props.page, pageSize })
}

</script>

<style scoped lang="less">
.header {
  display: flex;
  height: 45px;
  padding: 0 5px;
  justify-content: space-between;
  align-items: center;

  .title {
    font-size: 20px;
    font-weight: 700;
  }

  .handler {
    align-items: center;
  }
}

.footer {
  display: flex;
  margin-top: 15px;
  text-align: right;
  justify-content: flex-end;
  margin-left: auto;

  .el-pagination {
    text-align: right;
  }
}
</style>