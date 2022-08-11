<template>
  <div class="role">
    <page-search :searchFormConfig="searchFormConfig" @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick" />
    <page-content pageName="Role" :contentTableConfig="contentTableConfig" ref="pageContentRef" />
  </div>
</template>

<script setup lang="ts" name="vue">
import { ref } from "vue"
import PageSearch from "@/components/page-search";
import PageContent from "@/components/page-content"

import { searchFormConfig } from "./config/search.config";
import { contentTableConfig } from "./config/content.config"

const pageContentRef = ref<InstanceType<typeof PageContent>>()

const handleResetClick = () => {
  pageContentRef.value?.getPageData()
}

const handleQueryClick = (queryInfo: any) => {
  pageContentRef.value?.getPageData(queryInfo)
}
</script>

<style scope lang="less"></style>