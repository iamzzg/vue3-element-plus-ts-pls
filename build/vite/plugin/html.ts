import type { Plugin } from 'vite'
import pkg from '../../../package.json'
import { GLOBAL_CONFIG_FILE_NAME } from '../../constant'
import { createHtmlPlugin } from 'vite-plugin-html'

export const setupHtmlPlugin = (env: ViteEnv, isBuild: boolean) => {
  const { VITE_GLOBAL_APP_TITLE, VITE_PUBLIC_PATH } = env

  const path = VITE_PUBLIC_PATH.endsWith('/') ? VITE_PUBLIC_PATH : `${VITE_PUBLIC_PATH}/`

  // 根据 public_path 和配置文件名拼接src
  const getAppCongiSrc = () => {
    return `${path || '/'}${GLOBAL_CONFIG_FILE_NAME}?v=${pkg.version}-${new Date().getTime()}`
  }

  const htmlPlugin = createHtmlPlugin({
    minify: isBuild,
    inject: {
      // 注入 index.html 模板的变量
      data: {
        title: VITE_GLOBAL_APP_TITLE
      },
      // 嵌入生成的 app.config.js 到打包后的 index.html中
      tags: isBuild
        ? [
            {
              tag: 'script',
              attrs: {
                src: getAppCongiSrc()
              }
            }
          ]
        : []
    }
  })

  return htmlPlugin as any
}
