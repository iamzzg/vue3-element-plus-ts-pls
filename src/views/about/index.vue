<template>
  <div class="about">
    <h1>This is an about page</h1>
    <svg-icon icon="less-customer"></svg-icon>
    <el-image :src="getImageUrl('404.png')" fit="fill"></el-image>
  </div>
</template>
<script lang="ts" setup>
import { getImageUrl } from '@/utils'
</script>

<style></style>
