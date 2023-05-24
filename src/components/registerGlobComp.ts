import type { App, Plugin } from 'vue'
import SvgIcon from './SvgIcon'
import Avatar from './Avatar'
import Image from './Image'

// 全局注册组件
const globalCompList = [SvgIcon, Avatar, Image] as unknown as Plugin[]

export const registerGlobComp = (app: App) => {
  for (const component of globalCompList) {
    app.use(component)
  }
}
