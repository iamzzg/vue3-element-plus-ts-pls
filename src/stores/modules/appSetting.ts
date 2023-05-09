import { defineStore, type Pinia } from 'pinia'
import { setDomAttribute } from '@/utils/doms'

export enum ThemeEnum {
  DARK = 'dark',
  LIGHT = 'light'
}

interface AppSetting {
  theme: string
}

const themeKey = 'app-theme'

export const useAppStore = defineStore('appSetting', {
  state: (): AppSetting => {
    let initialTheme = localStorage.getItem(themeKey)
    initialTheme = initialTheme ? initialTheme : ThemeEnum.LIGHT
    setDomAttribute(document.querySelector('html') as HTMLElement, 'class', initialTheme)
    return {
      theme: initialTheme
    }
  },
  getters: {
    isDark(): boolean {
      return this.theme == ThemeEnum.DARK
    }
  },
  actions: {
    toggleTheme() {
      if (this.isDark) {
        // TODO: 修复切换light时 值是 auto,这么做也没有效果
        this.theme = ThemeEnum.LIGHT
        setDomAttribute(document.querySelector('html') as HTMLElement, 'class', this.theme)
        localStorage.setItem(themeKey, this.theme)
      } else {
        this.theme = ThemeEnum.DARK
        setDomAttribute(document.querySelector('html') as HTMLElement, 'class', this.theme)
        localStorage.setItem(themeKey, this.theme)
      }
    }
  }
})

export const useAppStoreWithOut = (store: Pinia | null | undefined) => {
  return useAppStore(store)
}
