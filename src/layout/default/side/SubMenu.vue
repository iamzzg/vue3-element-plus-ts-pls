<template>
  <template v-for="menu in menuList" :key="menu.path">
    <!-- <el-menu-item v-if="hasNoChildren(menu)" @click="clickMenu(menu)">
      <MenuItem :item="menu"></MenuItem>
    </el-menu-item> -->
    <MenuItem
      v-if="hasNoChildren(menu)"
      @click="clickMenu(menu)"
      :class="{ active: menu.path == currentRoute.path }"
      :item="menu"
    >
    </MenuItem>
    <el-sub-menu
      :index="menu.path"
      :class="{ 'submenu-active': subMenuIsAcitve(menu.path) }"
      v-else
    >
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

const { push, currentRoute } = useRouter()
const appStore = useAppStore()

// 判断当前菜单折叠激活
const subMenuIsAcitve = (path: string) => {
  if (!appStore.menuCollapsed) return false
  const matchedRoutes = currentRoute.value.matched
  return matchedRoutes.some((route) => route.path == path)
}

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
<style lang="scss" scoped>
.active {
  background-color: var(--el-color-primary);
}

.submenu-active {
  background-color: var(--el-color-primary);
}
</style>
