<script setup lang="ts">
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import projSetting from '@/settings/projectSetting'

const { elSize, zIndex } = projSetting
</script>

<template>
  <el-config-provider :locale="zhCn" :size="elSize" :z-index="zIndex">
    <router-view></router-view>
  </el-config-provider>
</template>

<style lang="scss" scoped></style>
