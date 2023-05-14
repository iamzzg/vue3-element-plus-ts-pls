export {}

// 给 vue-router 模块中增加声明
declare module 'vue-router' {
  interface RouteMeta extends Record<string | number | symbol, unknown> {
    /**
     * 是否使用keep-alive缓存
     */
    cache?: boolean
    // 排序
    orderNo?: number
  }
}
