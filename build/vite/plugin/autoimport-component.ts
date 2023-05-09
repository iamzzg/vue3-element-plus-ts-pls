import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite' // 自动导入组件
import Components from 'unplugin-vue-components/vite' // 自动导入组件
import type { Plugin } from 'vite'

export const setupAutoImportAndComponentPlugin = () => {
  const plugins = [
    AutoImport({
      resolvers: [ElementPlusResolver()],
      eslintrc: {
        enabled: true
      }
    }),
    Components({
      dts: true,
      dirs: [],
      resolvers: [
        // 按需引入重写scss颜色变量
        ElementPlusResolver({
          importStyle: 'sass'
        })
      ]
    })
  ] as Plugin[]
  return plugins
}
