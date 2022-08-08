<template>
  <div class="hy-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="props.labelWidth">
      <el-row>
        <template v-for="item in props.formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item 
              :label="item.label" 
              :rules="item.rules"
              :style="itemStyle"
            >
              <template v-if="item.type === 'input' || item.type === 'password' ">
                <el-input 
                  :placeholder="item.placeholder" 
                  :show-password="item.type === 'password'" 
                  v-model="formData[`${item.field}`]"
                />
              </template>
              <template v-else-if="item.type === 'select' ">
                <el-select 
                  :placeholder="item.placeholder" 
                  v-bind="item.otherOptions"
                  v-model="formData[`${item.field}`]"
                >
                  <el-option 
                    v-for="option in item.options" 
                    :key="option.value"
                    :value="option.value"
                    >{{ option.title }}</el-option
                  >
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker 
                  v-bind="item.otherOptions" 
                  v-model="formData[`${item.field}`]"
                />
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import { PropType } from "vue"
import { IFormItem } from "../types"

const props = defineProps({
  formData: {
    type: Object,
    required: true
  },
  formItems: {
    type: Array as PropType < IFormItem[] > ,
    default: () => []
  },
  labelWidth: {
    type: String,
    default: "100px"
  },
  itemStyle: {
    type: Object,
    default: () => ({ padding: '10px 40px'})
  },
  colLayout: {
    type: Object,
    default: () => ({
      xl: 6,
      lg: 8,
      md: 12,
      sm: 24,
      xs: 24
    })
  }
})

</script>

<style scope lang="less">
.hy-form {
  padding-top: 2px;
}
</style>