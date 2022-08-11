<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" @resetBtnClick="handleResetClick" @queryBtnClick="handleQueryClick" />
    <page-content pageName="Users" :contentTableConfig="contentTableConfig" ref="pageContentRef" />
  </div>
</template>

<script setup lang="ts" name="user">
import { ref } from "vue"
import PageSearch from "@/components/page-search"
import PageContent from "@/components/page-content";
import { searchFormConfig } from "./config/search.config";
import { contentTableConfig } from "./config/content.config";

import { usePageSearch } from "@/hooks/use-page-search";

const [ pageContentRef, handleResetClick, handleQueryClick ] = usePageSearch()

// const pageContentRef = ref<InstanceType<typeof PageContent>>()

// const handleResetClick = () => {
//   pageContentRef.value?.getPageData()
// }

// const handleQueryClick = (queryInfo: any) => {
//   pageContentRef.value?.getPageData(queryInfo)
// }

</script>

<style scoped lang="less">

</style>