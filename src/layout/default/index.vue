<template>
  <el-container class="h-full">
    <LayoutSide></LayoutSide>
    <el-main class="p-0 flex flex-col">
      <LayoutHeader></LayoutHeader>
      <LayoutContent></LayoutContent>
    </el-main>
  </el-container>
</template>

<script lang="ts" setup>
import LayoutContent from './content/index.vue'
import LayoutHeader from './header/index.vue'
import LayoutSide from './side/index.vue'
</script>
