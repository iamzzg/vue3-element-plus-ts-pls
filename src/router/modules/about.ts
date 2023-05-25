import Layout from '@/layout/default/index.vue'
import type { AppRouteRecordRaw } from '../types'
export default {
  path: '/about',
  name: 'AboutLayout',
  component: Layout,
  meta: {
    title: '关于',
    cache: true,
    icon: 'dashboard',
    hideChildrenMenu: true
  },
  children: [
    {
      path: '',
      name: 'About',
      meta: {
        title: '关于',
        cache: true,
        hideBreadCrumb: true
      },
      component: () => import('@/views/about/index.vue')
    }
  ]
} as AppRouteRecordRaw
