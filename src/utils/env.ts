import type { GlobalEnvConfig } from '#/config'
import { getConfInWindowKey } from '../../build/utils'
import { warn } from './log'

export const isDevMode = () => {
  return import.meta.env.DEV
}
export const isProdMode = () => {
  return import.meta.env.PROD
}

/**
 * 获取env中 VITE_GLOBAL_ 开头的环境变量
 * @returns
 */
export function getAppEnvConfig() {
  const windowConfigName = getConfInWindowKey(import.meta.env)

  const ENV = isDevMode()
    ? import.meta.env
    : (window[windowConfigName as any] as unknown as GlobalEnvConfig)

  const {
    VITE_GLOBAL_APP_TITLE,
    VITE_GLOBAL_BASIC_API,
    VITE_GLOBAL_WINDOW_CONFIG_KEY,
    VITE_GLOBAL_IMG_PREFIX_URL
  } = ENV

  if (!/^[a-zA-Z_0-9]*$/.test(VITE_GLOBAL_WINDOW_CONFIG_KEY)) {
    warn(
      `VITE_GLOBAL_WINDOW_CONFIG_KEY 变量只能包含 数字/字母/下划线_,请重新在.env文件中修改并重新运行程序`
    )
  }

  return {
    VITE_GLOBAL_APP_TITLE,
    VITE_GLOBAL_BASIC_API,
    VITE_GLOBAL_WINDOW_CONFIG_KEY,
    VITE_GLOBAL_IMG_PREFIX_URL
  }
}
