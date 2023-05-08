import { defineStore, type Pinia } from 'pinia'
import { useDark, useToggle } from '@vueuse/core'
import type { App } from 'vue'

export enum ThemeEnum {
  DARK = 'dark',
  LIGHT = 'light'
}

const themeKey = 'app-theme'

const isDark = useDark({
  storageKey: themeKey,
  valueDark: ThemeEnum.DARK,
  valueLight: ThemeEnum.LIGHT,
  initialValue: ThemeEnum.LIGHT
})
const toggleDark = useToggle(isDark)

export const useAppStore = defineStore('appSetting', {
  state: () => {
    return {
      theme: localStorage.getItem(themeKey) || ThemeEnum.LIGHT
    }
  },
  actions: {
    toggleTheme() {
      if (isDark.value) {
        // TODO: 修复切换light时 值是 auto,这么做也没有效果
        localStorage.setItem(themeKey, ThemeEnum.LIGHT)
      } else {
        localStorage.setItem(themeKey, ThemeEnum.DARK)
      }
      toggleDark()

      this.theme = localStorage.getItem(themeKey) as string
    }
  }
})

export const useAppStoreWithOut = (store: Pinia | null | undefined) => {
  return useAppStore(store)
}
