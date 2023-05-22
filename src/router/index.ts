import type { App } from 'vue'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import basiceRoutes from './constant'
import { setupRouteGaurd } from './gaurd'
import type { AppRouteRecordRaw } from './types'
import { useAppStoreWithOut } from '@/stores/modules/appSetting'

const routes: AppRouteRecordRaw[] = []

const asyncRoutes: AppRouteRecordRaw[] = []
// glob导入文件，eager表同步

importRouteModule()

function importRouteModule() {
  const routeMod = import.meta.glob('./modules/*.ts', { eager: true })

  const modules: AppRouteRecordRaw[] = []

  for (const module of Object.values(routeMod)) {
    modules.push((module as any).default as AppRouteRecordRaw)
  }
  asyncRoutes.push(...modules)
}

routes.push(...asyncRoutes, ...basiceRoutes)

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes: routes as unknown as RouteRecordRaw[]
})

export default router

export const setupRouter = async (app: App) => {
  setupRouteGaurd(router)

  app.use(router)

  // 此处解决 pinia 持久化插件无法保存bug,等待路由准备完成后
  await router.isReady()
  const appStore = useAppStoreWithOut()

  appStore.buildMenuList(asyncRoutes)
}
