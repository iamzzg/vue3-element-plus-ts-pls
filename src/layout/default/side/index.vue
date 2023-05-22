<template>
  <el-aside class="layout-aside" ref="menuRef">
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
      <div class="mobile-menu-mask" @click="clickMask"></div>
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

const menuRef = ref<ComponentPublicInstance | null>(null)

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const clickMask = () => {
  console.log(menuRef)
  menuRef.value!.$el.style.transform = `translateX(-100%)`
}
</script>

<style lang="scss" scoped>
.layout-aside {
  height: 100%;
  overflow: hidden;
  border-right: 1px solid #ccc;

  :deep(.el-menu) {
    border-right: none;
  }
}
</style>

<style>
.mobile-menu-mask {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 8000;
  display: none;
  background-color: rgba(0, 0, 0, 0.33);
}
</style>
