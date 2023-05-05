import Layout from '@/layout/default/index.vue'
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
}
