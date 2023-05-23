<template>
  <el-aside class="layout-aside" :class="getClass">
    <el-scrollbar>
      <Logo v-if="showLogo"></Logo>
      <el-menu
        class="el-menu-vertical"
        :collapse="appStore.menuCollapsed"
        :collapse-transition="false"
      >
        <SubMenu :menu-list="menuList"> </SubMenu>
      </el-menu>
    </el-scrollbar>

    <Teleport to="body">
      <div class="mobile-menu-mask" :class="getClass" @click="clickMask"></div>
    </Teleport>
  </el-aside>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import SubMenu from './SubMenu.vue'
import Logo from './Logo.vue'
import { useAppStore } from '@/stores/modules/appSetting'

const appStore = useAppStore()
const { showLogo } = appStore.$state
const menuList = computed(() => {
  return appStore.menuList
})

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
  overflow: auto;
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
