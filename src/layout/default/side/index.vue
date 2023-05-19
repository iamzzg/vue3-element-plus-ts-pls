<template>
  <el-button type="primary" @click="isCollapse = !isCollapse">收缩</el-button>

  <el-menu
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-sub-menu :index="menuItem.path" v-for="(menuItem, index) in menuList" :key="index">
      <template #title>
        <el-icon><location /></el-icon>
        <span>{{ menuItem.meta.title }}</span>
      </template>
      <el-menu-item v-for="(childItem, childIndex) in menuItem.children" :key="childIndex">
        {{ childItem.meta.title }}
      </el-menu-item>
    </el-sub-menu>
    <!-- <el-menu-item index="2">
      <el-icon><icon-menu /></el-icon>
      <template #title>Navigator Two</template>
    </el-menu-item> -->
    <!-- <el-menu-item index="3" disabled>
      <el-icon><document /></el-icon>
      <template #title>Navigator Three</template>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <template #title>Navigator Four</template>
    </el-menu-item> -->
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue'

const menuList = ref([
  {
    path: 'test1',
    meta: { title: 'test1', icon: 'test' },
    children: [{ path: 'test1-1', meta: { title: 'test1-1', href: 'http://www.baidu.com' } }]
  },
  {
    path: 'test2',
    meta: { title: 'test2', icon: 'test' },
    children: [{ path: 'test2-1', meta: { title: 'test2-1', href: 'http://www.baidu.com' } }]
  },
  {
    path: 'test3',
    meta: { title: 'test3', icon: 'test' },
    children: [
      {
        path: 'test3-1',
        meta: { title: 'test3-1' },
        children: [
          { path: 'test3-1-1', meta: { title: 'test3-1-1' } },
          { path: 'test3-2-1', meta: { title: 'test3-2-1' } },
          { path: 'test3-3-1', meta: { title: 'test3-3-1' } }
        ]
      }
    ]
  }
])

const isCollapse = ref(true)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo {
  min-height: 400px;
}
</style>
