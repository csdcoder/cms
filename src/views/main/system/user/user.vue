<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />
    <div class="content"></div>
  </div>
</template>

<script setup lang="ts" name="user">
  import PageSearch from "@/components/page-search"
  import { searchFormConfig } from "./config/search.config";

</script>

<style scoped>
</style>