import Layout from '@/layout/default/index.vue'
import type { AppRouteRecordRaw } from '../types'
export default {
  path: '/home',
  name: 'HomeLayout',
  component: Layout,
  children: [
    {
      path: '',
      name: 'Home',
      component: () => import('@/views/home/index.vue')
    }
  ]
} as AppRouteRecordRaw
