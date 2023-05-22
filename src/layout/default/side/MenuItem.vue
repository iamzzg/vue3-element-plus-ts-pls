<template>
  <el-menu-item class="menu-item">
    <svg-icon :icon="item.meta?.icon" class="mr-2"></svg-icon>
    <template #title>
      <span>{{ item.meta?.title }}</span>
    </template>
  </el-menu-item>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { AppRouteRecordRaw } from '@/router/types'
import { useAppStore } from '@/stores/modules/appSetting'
defineOptions({
  name: 'MenuItem'
})

defineProps({
  item: {
    type: Object as PropType<AppRouteRecordRaw>,
    default: () => ({})
  }
})

</script>
<style lang="scss"></style>
