import type { App } from 'vue'

/**
 * 给app全局注册组件,或者添加install方法作为 vue插件
 * @param comp 组件
 * @param alias 别名
 * @returns 返回组件
 */
export const withInstall = <T>(comp: T, alias?: string) => {
  ;(comp as any).install = (app: App) => {
    // @ts-ignore
    app.component(comp.name || comp.displayName, comp)

    if (alias) {
      app.config.globalProperties[alias] = comp
    }
  }
  return comp as T
}
/**
 * 通过相对路径引入@/assets/images/下的资源--一个被完整解析的静态资源 URL
 * @param imgName 图片名称
 * @returns 被完整解析的静态资源 URL
 */
export const getImageUrl = (imgName: string) => {
  return new URL(`../assets/images/${imgName}`, import.meta.url).href
}
