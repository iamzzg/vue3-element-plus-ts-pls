import { defineStore } from 'pinia'
import { useDark, useToggle } from '@vueuse/core'

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
        toggleDark(false)
      } else {
        toggleDark(true)
      }
      this.theme = localStorage.getItem(themeKey) as string
    }
  }
})
