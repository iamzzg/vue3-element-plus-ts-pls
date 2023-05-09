import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite' // 自动导入组件
import Components from 'unplugin-vue-components/vite' // 自动导入组件
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'node:path'
import { wrapperEnv } from './build/utils'

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  // 项目根目录
  const root = process.cwd()
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, root)

  const isBuild = command == 'build'

  console.log(env)
  const { VITE_PUBLIC_PATH, VITE_BASIC_API, VITE_PORT } = wrapperEnv(env)

  return {
    root,
    base: VITE_PUBLIC_PATH,
    plugins: [
      vue(),
      vueJsx(),
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
      }),
      // 生成svg-sprite图标的文件夹位置
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        // 指定symbolId格式
        symbolId: 'icon-[dir]-[name]'
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '~/': `${path.resolve(__dirname, 'src')}/`
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          // 按需引入改变主题色
          additionalData: `@use "~/styles/element-plus/color.scss" as *;`
        }
      }
    },
    // VITE默认不加载 env 文件，可以通过process来获取
    server: {
      port: VITE_PORT,
      proxy: {
        [VITE_BASIC_API]: {
          target: 'http://192.168.1.1:3000',
          changeOrigin: true,
          rewrite: (path) => path.replace(new RegExp(`^${process.env.VITE_BASIC_API}`), '')
        }
      }
    }
  }
})
