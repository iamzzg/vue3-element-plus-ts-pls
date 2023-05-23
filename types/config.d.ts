// 暴露到全局变量的 env
export interface GlobalEnvConfig {
  VITE_GLOBAL_BASIC_API: string
  VITE_GLOBAL_APP_TITLE: string
  VITE_GLOBAL_WINDOW_CONFIG_KEY: string
  VITE_GLOBAL_IMG_PREFIX_URL: string
}

// 提取 viteEnv 到全局变量中的接口
export interface GlobalConfig {
  basicApi: string
  appTitle: string
  windowConfigKey: string
  imgPrefixUrl: string
}
