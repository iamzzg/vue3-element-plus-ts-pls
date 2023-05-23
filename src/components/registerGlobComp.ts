import type { App, Plugin } from 'vue'
import SvgIcon from './SvgIcon'
import Avatar from './Avatar'

// 全局注册组件
const globalCompList = [SvgIcon, Avatar] as unknown as Plugin[]

export const registerGlobComp = (app: App) => {
  for (const component of globalCompList) {
    app.use(component)
  }
}
