import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import basiceRoutes from './constant'
import type { AppRouteRecordRaw } from './types'

const routes: AppRouteRecordRaw[] = []
// glob导入文件，eager表同步

importRouteModule()

function importRouteModule() {
  const routeMod = import.meta.glob('./modules/*.ts', { eager: true })

  for (const modules of Object.values(routeMod)) {
    routes.push((modules as any).default as AppRouteRecordRaw)
  }
}

routes.push(...basiceRoutes)

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes: routes as unknown as RouteRecordRaw[]
})

export default router
