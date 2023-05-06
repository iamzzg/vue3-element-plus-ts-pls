import Layout from '@/layout/default/index.vue'
import type { AppRouteRecordRaw } from '../types'
export default {
  path: '/about',
  name: 'AboutLayout',
  component: Layout,
  children: [
    {
      path: '',
      name: 'About',
      component: () => import('@/views/about/index.vue')
    }
  ]
} as AppRouteRecordRaw
