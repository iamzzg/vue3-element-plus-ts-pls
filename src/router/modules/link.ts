import Layout from '@/layout/default/index.vue'
import type { AppRouteRecordRaw } from '../types'
export default {
  path: '/external',
  name: 'ExternalLayout',
  component: Layout,
  meta: {
    title: '外链',
    cache: true,
    icon: 'dashboard'
  },
  children: [
    {
      path: 'https://www.baidu.com',
      name: 'baidu',
      meta: {
        title: '百度',
        cache: true
      }
      // component: () => import('@/views/about/index.vue')
    }
  ]
} as AppRouteRecordRaw
