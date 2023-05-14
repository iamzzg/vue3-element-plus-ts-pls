import { defineStore } from 'pinia'
import { store } from '@/stores/index'
import type { RouteRecordName } from 'vue-router'
export const useCachedViewStore = defineStore('cachedView', {
  state: () => {
    return {
      cachedView: new Set<RouteRecordName>()
    }
  },
  getters: {
    cachedViewArr(): RouteRecordName[] {
      return Array.from(this.cachedView)
    }
  },
  actions: {
    addCacheView(viewName: RouteRecordName) {
      if (viewName && !this.cachedView.has(viewName)) {
        this.cachedView.add(viewName)
      }
    },
    removeCacheView(viewName: RouteRecordName) {
      if (viewName && this.cachedView.has(viewName)) {
        this.cachedView.delete(viewName)
      }
    },
    clearCacheView() {
      this.cachedView.clear()
    }
  }
})

export function useCachedViewStoreWithOut() {
  return useCachedViewStore(store)
}
