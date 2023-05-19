import type { AppRouteRecordRaw } from '../types'
import { cloneDeep } from 'lodash-es'

export const normalizeMenu = (routes: AppRouteRecordRaw[]) => {
  routes = cloneDeep(routes)
  function treeTraverse(nodes: any[]) {
    const menus = []

    for (const route of nodes) {
      const { path, children, meta } = route
    }
  }

  treeTraverse(routes)
  return []
}
