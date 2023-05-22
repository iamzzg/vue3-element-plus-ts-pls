<template>
  <el-container class="h-full" :class="getContainerClass">
    <LayoutSide></LayoutSide>
    <el-main class="p-0 flex flex-col">
      <LayoutHeader></LayoutHeader>
      <LayoutContent></LayoutContent>
    </el-main>
  </el-container>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/stores/modules/appSetting'
import { computed } from 'vue'
import LayoutContent from './content/index.vue'
import LayoutHeader from './header/index.vue'
import LayoutSide from './side/index.vue'

const appStore = useAppStore()

const getContainerClass = computed(() => {
  return {
    isCollapsed: appStore.menuCollapsed,
    isMobile: appStore.isMobile,
    showMenu: appStore.showMenu
  }
})
</script>
