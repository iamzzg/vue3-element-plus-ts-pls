import { createPinia } from 'pinia'
import type { App } from 'vue'
import { createPersistedState } from 'pinia-plugin-persistedstate'

const store = createPinia()
// 该持久化插件在数据改变时才会存储
store.use(
  createPersistedState({
    key: (id) => `${id}`
  })
)
export function setupStore(app: App) {
  app.use(store)
}
export { store }
