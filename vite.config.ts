import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite' // 自动导入组件
import Components from 'unplugin-vue-components/vite' // 自动导入组件
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
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
      dirs: ['src/components'],
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
    proxy: {
      [process.env.VITE_BASIC_API as string]: {
        target: process.env.VITE_PROXY,
        changeOrigin: true,
        rewrite: (path) => path.replace(new RegExp(`^${process.env.VITE_BASIC_API}`), '')
      }
    }
  }
})
