<template>
  <div class="menu">
    <page-content :contentTableConfig="contentTableConfig" pageName="Menu"></page-content>
  </div>
</template>

<script setup lang="ts" name="menu-page">
import PageContent from '@/components/page-content';
import { contentTableConfig } from './config/content.config';

</script>

<style scope lang="less"></style>