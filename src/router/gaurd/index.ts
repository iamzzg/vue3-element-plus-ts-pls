import { useCachedViewStoreWithOut } from '@/stores/modules/cachedView'
import type { Router } from 'vue-router'

const cacheStore = useCachedViewStoreWithOut()

export const setupRouteGaurd = (router: Router) => {
  setupRouteCacheGaurd(router)
}

export const setupRouteCacheGaurd = (router: Router) => {
  router.beforeEach((to, from, next) => {
    if (to.meta.cache && to.name) {
      cacheStore.addCacheView(to.name)
    }
    next()
  })
}
