import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/default/index.vue'

const NotFound: RouteRecordRaw = {
  // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
  path: '/:pathMatch(.*)*',
  name: 'NotFoundLayout',
  component: Layout,
  children: [
    {
      path: '',
      name: 'NotFound',
      component: () => import('@/views/404/index.vue')
    }
  ]
}

const Root: RouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: '/home'
}

const basiceRoutes = [Root, NotFound]

export default basiceRoutes
