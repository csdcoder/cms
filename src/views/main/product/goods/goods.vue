<template>
  <div class="goods">
    <page-content :contentTableConfig="contentTableConfig" pageName="Goods"></page-content>
  </div>
</template>

<script setup lang="ts">
import PageContent from '@/components/page-content';
import { contentTableConfig } from './config/content.config';

</script>

<style scope lang="less"></style>