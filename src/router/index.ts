import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import basiceRoutes from './constant'

const routes: RouteRecordRaw[] = []
// glob导入文件，eager表同步

importRouteModule()

function importRouteModule() {
  const routeMod = import.meta.glob('./modules/*.ts', { eager: true })

  for (const modules of Object.values(routeMod)) {
    routes.push((modules as any).default as RouteRecordRaw)
  }
}

routes.push(...basiceRoutes)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
