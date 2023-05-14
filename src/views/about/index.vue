<template>
  <div class="about">
    <h1>This is an about page</h1>
    <svg-icon icon="less-customer"></svg-icon>
    <el-image :src="getImageUrl('404.png')" fit="fill"></el-image>
    <el-input v-model="about" placeholder="" size="normal" clearable></el-input>
  </div>
</template>
<script lang="ts" setup>
import { getImageUrl } from '@/utils'
import { ref } from 'vue'

defineOptions({
  name: 'About'
})

const about = ref('')
</script>

<style></style>
