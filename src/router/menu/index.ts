import { isDef, isExternal } from '@/utils/validate'
import type { AppRouteRecordRaw } from '../types'
import { cloneDeep } from 'lodash-es'

// 路由最终是打平成二级路由，层级是为了显示为菜单
export const normalizeMenu = (routes: AppRouteRecordRaw[]) => {
  routes = cloneDeep(routes)

  function treeTraverse(nodes: any[], parentPath = '') {
    const menus: AppRouteRecordRaw[] = []

    for (const [index, route] of Object.entries(nodes)) {
      const { path, children, meta } = route
      const patchPath = parentPath + path

      // 隐藏菜单，隐藏子菜单
      const { hideMenu, hideChildrenMenu, orderNo } = meta ?? {}
      const patchMeta = isDef(orderNo) ? meta : { ...meta, orderNo: index }
      const menu = { ...route, path: patchPath, meta: { ...patchMeta } }

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

    // 升序排序
    menus.sort((a, b) => {
      if (a.meta?.orderNo! <= b.meta?.orderNo!) {
        return -1
      } else {
        return 1
      }
    })
    return menus
  }

  const menus = treeTraverse(routes)
  // console.log('菜单:>>>>>>>', menus)
  return menus
}
