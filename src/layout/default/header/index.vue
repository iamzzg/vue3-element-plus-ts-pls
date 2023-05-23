<template>
  <div class="layout-header">
    <el-icon class="cursor-pointer mr-2" @click="clickExpandFold">
      <Expand v-if="showExpand" />
      <Fold v-else></Fold>
    </el-icon>

    <ThemeSwitcher class="ml-auto"></ThemeSwitcher>
  </div>
</template>

<script lang="ts" setup>
import { Expand, Fold } from '@element-plus/icons-vue'
import ThemeSwitcher from './ThemeSwitcher.vue'
import { useAppStore } from '@/stores/modules/appSetting'
import { computed } from 'vue'

const appStore = useAppStore()
const showExpand = computed(() => {
  if (!appStore.isMobile) {
    return appStore.menuCollapsed
  } else {
    return !appStore.showMenu
  }
})

const clickExpandFold = () => {
  if (showExpand.value) {
    if (!appStore.isMobile) {
      appStore.setMenuCollapse(false)
    } else {
      appStore.setShowMenu(true)
    }
  } else {
    if (!appStore.isMobile) {
      appStore.setMenuCollapse(true)
    } else {
      appStore.setShowMenu(true)
    }
  }
}
</script>
<style lang="scss">
.layout-header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 10px;
  border-bottom: 1px solid #ccc;

  > nav {
    .app-link {
      margin-right: 10px;
    }
  }
}
</style>
