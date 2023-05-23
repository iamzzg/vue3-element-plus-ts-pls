import type { GlobalConfig } from '#/config'
import { getAppEnvConfig } from '@/utils/env'
import { readonly } from 'vue'

/**
 * 返回 vite_global_ 开头的环境变量,去掉 vite_global_ 前缀,
 * @returns
 */
export const useViteGlobalSetting = () => {
  const {
    VITE_GLOBAL_APP_TITLE,
    VITE_GLOBAL_BASIC_API,
    VITE_GLOBAL_WINDOW_CONFIG_KEY,
    VITE_GLOBAL_IMG_PREFIX_URL
  } = getAppEnvConfig()

  const globalEnv: Readonly<GlobalConfig> = readonly({
    basicApi: VITE_GLOBAL_BASIC_API,
    appTitle: VITE_GLOBAL_APP_TITLE,
    windowConfigKey: VITE_GLOBAL_WINDOW_CONFIG_KEY,
    imgPrefixUrl: VITE_GLOBAL_IMG_PREFIX_URL
  })

  return globalEnv
}
