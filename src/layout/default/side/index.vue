<template>
  <el-aside class="layout-aside" :class="getClass">
    <el-button type="primary" @click="appStore.toggleMenuCollapse()">收缩</el-button>

    <el-menu
      class="el-menu-vertical"
      :collapse="appStore.menuCollapsed"
      @open="handleOpen"
      @close="handleClose"
      :collapse-transition="true"
    >
      <SubMenu :menu-list="menuList"> </SubMenu>
    </el-menu>

    <Teleport to="body">
      <div class="mobile-menu-mask" :class="getClass" @click="clickMask"></div>
    </Teleport>
  </el-aside>
</template>

<script lang="ts" setup>
import { computed, ref, type ComponentPublicInstance } from 'vue'
import SubMenu from './SubMenu.vue'
import { useAppStore } from '@/stores/modules/appSetting'

const appStore = useAppStore()
const menuList = computed(() => {
  return appStore.menuList
})

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const clickMask = () => {
  appStore.setShowMenu(false)
}

const getClass = computed(() => {
  return {
    isCollapsed: appStore.menuCollapsed,
    isMobile: appStore.isMobile,
    showMenu: appStore.showMenu
  }
})
</script>

<style lang="scss" scoped>
.layout-aside {
  height: 100%;
  overflow: hidden;
  border-right: 1px solid #ccc;

  :deep(.el-menu) {
    border-right: none;
  }

  &.isMobile {
    transform: translateX(-100%);
  }
}
</style>

<style lang="scss">
.mobile-menu-mask {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 8000;
  display: none;
  background-color: rgba(0, 0, 0, 0.33);

  &.showMenu {
    display: block;
  }
}

.el-aside {
  &.isMobile {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 9999;
    background-color: #fff;

    &.showMenu {
      transform: translateX(0px);
    }
  }
}
</style>
