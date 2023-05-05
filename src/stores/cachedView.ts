import { defineStore } from 'pinia'

export const useCachedViewStore = defineStore('cachedView', {
  state: () => {
    return {
      cachedView: new Set<string>()
    }
  },
  getters: {
    cachedViewArr(): string[] {
      return Array.from(this.cachedView)
    }
  },
  actions: {
    addCacheView(viewName: string) {
      if (viewName && !this.cachedView.has(viewName)) {
        this.cachedView.add(viewName)
      }
    },
    removeCacheView(viewName: string) {
      if (viewName && this.cachedView.has(viewName)) {
        this.cachedView.delete(viewName)
      }
    },
    clearCacheView() {
      this.cachedView.clear()
    }
  }
})
