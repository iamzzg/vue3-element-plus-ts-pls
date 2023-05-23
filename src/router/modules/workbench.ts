import Layout from '@/layout/default/index.vue'
import type { AppRouteRecordRaw } from '../types'

const Route: AppRouteRecordRaw = {
  path: '/workbench',
  name: 'WorkbenchLayout',
  component: Layout,
  meta: {
    title: '工作台',
    icon: 'dashboard',
    orderNo: 0
  },
  children: [
    {
      path: 'analysize',
      name: 'Analysize',
      meta: {
        title: '分析',
        cache: true
      },
      component: () => import('@/views/workbench/analysize/index.vue')
    },
    {
      path: 'statistic',
      name: 'Statistic',
      meta: {
        title: '统计',
        cache: true
      },
      component: () => import('@/views/workbench/statistic/index.vue')
    }
  ]
}
export default Route
