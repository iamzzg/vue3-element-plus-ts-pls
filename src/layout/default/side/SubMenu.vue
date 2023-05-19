<template>
  <el-sub-menu index="1">
    <template #title>
      <el-icon><location /></el-icon>
      <span>Navigator One</span>
    </template>
    <el-menu-item index="1-1">item one</el-menu-item>
    <el-menu-item index="1-2">item two</el-menu-item>
    <el-menu-item index="1-3">item three</el-menu-item>

    <el-sub-menu index="1-4">
      <template #title><span>item four</span></template>
      <el-menu-item index="1-4-1">item one</el-menu-item>
    </el-sub-menu>
  </el-sub-menu>
</template>

<script lang="ts" setup>
// defineProps()
</script>
<style lang="scss"></style>
