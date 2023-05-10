<template>
  <div class="flex justify-center items-center h-full">
    <el-image :src="getImageUrl('404.png')" fit="fill"></el-image>
  </div>
</template>

<script lang="ts" setup>
import { getImageUrl } from '@/utils'
</script>
<style lang="scss"></style>
