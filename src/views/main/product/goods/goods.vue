<template>
  <div class="goods">
    <page-content :contentTableConfig="contentTableConfig" pageName="Goods">
      <template #image="scope">
        <el-image :src="scope.row.imgUrl" :preview-src-list="[scope.row.imgUrl]" style="width: 60px; height: 60px;"
          fit="cover" preview-teleported lazy hide-on-click-modal />
      </template> 
      <template #oldPrice="scope">
        {{ "￥"+scope.row.oldPrice}}
      </template>
    </page-content>
  </div>
</template>

<script setup lang="ts">
import PageContent from '@/components/page-content';
import { contentTableConfig } from './config/content.config';

</script>

<style scope lang="less"></style>