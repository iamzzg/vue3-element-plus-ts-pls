import { isExternal } from '@/utils/validate'
import type { AppRouteRecordRaw } from '../types'
import { cloneDeep } from 'lodash-es'

export const normalizeMenu = (routes: AppRouteRecordRaw[]) => {
  routes = cloneDeep(routes)

  function treeTraverse(nodes: any[], parentPath = '') {
    const menus: AppRouteRecordRaw[] = []

    for (const route of nodes) {
      const { path, children, meta } = route
      const patchPath = parentPath + path

      const menu = { ...route, path: patchPath }
      console.log('hhh', menu)

      // 隐藏菜单，隐藏子菜单
      const { hideMenu, hideChildrenMenu } = meta ?? {}

      if (!hideMenu) {
        menus.push(menu)
      }

      // 判断是外链链接,去除子菜单
      if (isExternal(path)) {
        menu.path = path
        Reflect.deleteProperty(menu, 'children')
        continue
      }

      if (!hideChildrenMenu && children && children.length > 0) {
        menu.children = treeTraverse(children, patchPath + '/')
      } else {
        Reflect.deleteProperty(menu, 'children')
      }
    }
    return menus
  }

  const menus = treeTraverse(routes)
  console.log('菜单:>>>>>>>', menus)
  return menus
}
