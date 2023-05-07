import type { App, Plugin } from 'vue'
import SvgIcon from './SvgIcon'

const globalCompList = [SvgIcon] as unknown as Plugin[]

export const registerGlobComp = (app: App) => {
  for (const component of globalCompList) {
    app.use(component)
  }
}
