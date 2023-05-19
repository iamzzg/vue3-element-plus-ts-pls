import type { App } from 'vue'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import basiceRoutes from './constant'
import { setupRouteGaurd } from './gaurd'
import type { AppRouteRecordRaw } from './types'

const routes: AppRouteRecordRaw[] = []
// glob导入文件，eager表同步

importRouteModule()

function importRouteModule() {
  const routeMod = import.meta.glob('./modules/*.ts', { eager: true })

  const modules: AppRouteRecordRaw[] = []

  for (const module of Object.values(routeMod)) {
    modules.push((module as any).default as AppRouteRecordRaw)
  }
  routes.push(...modules)
}

routes.push(...basiceRoutes)

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes: routes as unknown as RouteRecordRaw[]
})

export default router

export const setupRouter = (app: App) => {
  setupRouteGaurd(router)

  app.use(router)
}
