<template>
  <template v-for="menu in menuList" :key="menu.path">
    <!-- <el-menu-item v-if="hasNoChildren(menu)" @click="clickMenu(menu)">
      <MenuItem :item="menu"></MenuItem>
    </el-menu-item> -->
    <MenuItem v-if="hasNoChildren(menu)" @click="clickMenu(menu)" :item="menu"> </MenuItem>
    <el-sub-menu :index="menu.path" v-else>
      <template #title>
        <svg-icon
          v-if="menu.meta?.icon"
          :icon="menu.meta?.icon"
          size="18"
          class="mr-1 el-icon"
        ></svg-icon>
        <span>{{ menu.meta?.title }}</span>
      </template>
      <SubMenu :menu-list="menu.children"></SubMenu>
    </el-sub-menu>
  </template>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { AppRouteRecordRaw } from '@/router/types'
import MenuItem from './MenuItem.vue'
import { Location } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import { isUrl } from '@/utils/validate'
import { useAppStore } from '@/stores/modules/appSetting'
defineOptions({
  name: 'SubMenu'
})
defineProps({
  menuList: {
    type: Array as PropType<AppRouteRecordRaw[]>,
    default: () => []
  }
})

const { push } = useRouter()

const clickMenu = ({ path }: AppRouteRecordRaw) => {
  if (isUrl(path)) {
    window.open(path as string, '__blank')
  } else {
    push(path)
  }
}

// 没有children
const hasNoChildren = (menu: AppRouteRecordRaw) => {
  return !menu.children || menu.children.length == 0
}
</script>
<style lang="scss"></style>
