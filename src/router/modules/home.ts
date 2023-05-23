import Layout from '@/layout/default/index.vue'
import type { AppRouteRecordRaw } from '../types'

const HomeRoute: AppRouteRecordRaw = {
  path: '/home',
  name: 'HomeLayout',
  component: Layout,
  meta: {
    title: '首页',
    icon: 'dashboard',
    hideChildrenMenu: true,
    orderNo: -1
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
    }
  ]
}
export default HomeRoute
