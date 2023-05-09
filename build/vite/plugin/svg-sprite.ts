import path from 'node:path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

export const setupSvgSpritePlugin = (isBuild: boolean) => {
  // 生成svg-sprite图标的文件夹位置
  const svgPlugin = createSvgIconsPlugin({
    // 指定需要缓存的图标文件夹
    iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
    // 指定symbolId格式
    symbolId: 'icon-[dir]-[name]'
  })

  return svgPlugin
}
