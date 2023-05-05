import Layout from '@/layout/default/index.vue'
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
}
