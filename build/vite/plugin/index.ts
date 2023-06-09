import type { Plugin } from 'vite'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { setupSvgSpritePlugin } from './svg-sprite'
import { setupAutoImportAndComponentPlugin } from './autoimport-component'
import { setupVisualizerPlugin } from './visualizer'
import { setupHtmlPlugin } from './html'

export const createVitePlugins = (viteEnv: ViteEnv, isBuild: boolean) => {
  const vitePlugins: Plugin[] = []

  vitePlugins.push(vue())

  vitePlugins.push(vueJsx())

  vitePlugins.push(setupSvgSpritePlugin(isBuild))

  vitePlugins.push(...setupAutoImportAndComponentPlugin())

  vitePlugins.push(...setupVisualizerPlugin())

  vitePlugins.push(...setupHtmlPlugin(viteEnv, isBuild))

  return vitePlugins
}
