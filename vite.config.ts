import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'

import path from 'node:path'
import { wrapperEnv } from './build/utils'
import { createVitePlugins } from './build/vite/plugin'

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  // 项目根目录
  const root = process.cwd()
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, root)

  const isBuild = command == 'build'

  const viteEnv = wrapperEnv(env)

  const { VITE_PUBLIC_PATH, VITE_BASIC_API, VITE_PORT, VITE_DROP_CONSOLE } = viteEnv

  return {
    root,
    base: VITE_PUBLIC_PATH,
    plugins: createVitePlugins(viteEnv, isBuild),
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
    esbuild: {
      pure: VITE_DROP_CONSOLE ? ['console.log', 'debugger'] : []
    },
    build: {
      target: 'es2015', //默认值是 modules,表示构建目标是现代浏览器,
      // cssTarget:"chrome61",// 构建的css目标浏览器
      // minify: 'terser',// 默认minify使用的是esbuild
      /**
       * 当 minify=“minify:'terser'” 解开注释
       * Uncomment when minify="minify:'terser'"
       */
      // terserOptions: {
      //   compress: {
      //     keep_infinity: true,
      //     drop_console: VITE_DROP_CONSOLE,
      //   },
      // },
      chunkSizeWarningLimit: 2000 // 规定触发警告的 chunk 大小,kbs
    },
    define: {
      //定义全局变量,替换
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
