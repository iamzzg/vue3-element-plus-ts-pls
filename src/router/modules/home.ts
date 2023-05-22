import Layout from '@/layout/default/index.vue'
import type { AppRouteRecordRaw } from '../types'
export default {
  path: '/home',
  name: 'HomeLayout',
  component: Layout,
  meta: {
    title: '首页',
    icon: 'dashboard'
    // hideChildrenMenu: true
  },
  children: [
    {
      path: '',
      name: 'Home',
      meta: {
        title: '首页',
        cache: true
      },
      component: () => import('@/views/home/index.vue')
    },
    {
      path: '/workbench',
      name: 'Workbench',
      meta: {
        title: '工作台'
      },
      children: [
        {
          path: '/analysize',
          name: 'Analysize',
          meta: {
            title: '分析'
          },
          component: () => import('@/views/home/index.vue')
        },
        {
          path: '/statistic',
          name: 'sStatistic',
          meta: {
            title: '统计'
          },
          component: () => import('@/views/home/index.vue')
        }
      ]
    }
  ]
} as AppRouteRecordRaw
