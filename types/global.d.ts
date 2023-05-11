declare global {
  // 全局类型
  declare type Nullable<T> = T | null

  declare type Recordable<T = any> = Record<string, T>

  interface ImportMetaEnv extends ViteEnv {
    __: unknown
  }

  declare interface ViteEnv {
    VITE_PUBLIC_PATH: string
    VITE_PORT: number
    VITE_DROP_CONSOLE: boolean
    VITE_GLOBAL_BASIC_API: string
    VITE_GLOBAL_APP_TITLE: string
    VITE_WINDOW_CONFIG_KEY: string // VITE_GLOBAL_ 挂载到window上的key
  }
}

// 必须导出一个东西，标记该模块为外部模块，扩大为全局范围
export {}
