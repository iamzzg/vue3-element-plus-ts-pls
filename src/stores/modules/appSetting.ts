import { defineStore } from 'pinia'
import { store } from '@/stores/index'

import { setDomAttribute } from '@/utils/doms'
import { ThemeEnum, THEMEKEY } from '@/enums/appEnum'
import type { AppRouteRecordRaw } from '@/router/types'
import { normalizeMenu } from '@/router/menu'
import { useThrottleFn } from '@vueuse/core'

interface AppSetting {
  theme: string
  menuList: AppRouteRecordRaw[]
  menuSetting: {
    isCollapsed: boolean
    showMenu: boolean
  }
  isMobile: boolean
}

export const useAppStore = defineStore('appSetting', {
  state: (): AppSetting => {
    let initialTheme = localStorage.getItem(THEMEKEY)
    initialTheme = initialTheme ? initialTheme : ThemeEnum.LIGHT
    setDomAttribute(document.querySelector('html') as HTMLElement, 'class', initialTheme)
    return {
      theme: initialTheme,
      menuList: [],
      menuSetting: {
        isCollapsed: false,
        showMenu: true
      },
      isMobile: false
    }
  },
  getters: {
    isDark(): boolean {
      return this.theme == ThemeEnum.DARK
    },
    menuCollapsed(): boolean {
      return this.menuSetting.isCollapsed
    }
  },
  actions: {
    toggleTheme() {
      if (this.isDark) {
        // TODO: 修复切换light时 值是 auto,这么做也没有效果
        this.setTheme(ThemeEnum.LIGHT)
      } else {
        this.setTheme(ThemeEnum.DARK)
      }
    },
    setTheme(theme: ThemeEnum) {
      this.theme = theme
      setDomAttribute(document.querySelector('html') as HTMLElement, 'class', this.theme)
      localStorage.setItem(THEMEKEY, this.theme)
    },
    setMenuList(_menuList: AppRouteRecordRaw[]) {
      this.menuList = _menuList
    },
    setIsMobile(isMobile: boolean) {
      this.isMobile = isMobile
    },
    setShowMenu(show: boolean) {
      this.menuSetting.showMenu = show
    },
    setMenuCollapse(collapsed: boolean) {
      this.menuSetting.isCollapsed = collapsed
    },
    toggleMenuCollapse(collapsed?: boolean) {
      if (collapsed == undefined) {
        this.menuSetting.isCollapsed = !this.menuSetting.isCollapsed
      } else {
        this.setMenuCollapse(collapsed)
      }
    },
    buildMenuList(routes: AppRouteRecordRaw[]) {
      const menus = normalizeMenu(routes)
      this.setMenuList(menus)
    }
  }
})

export const useAppStoreWithOut = () => {
  return useAppStore(store)
}

const resizeHandler = () => {
  const appStore = useAppStore()
  if (window.innerWidth <= 720) {
    appStore.setIsMobile(true)
  } else {
    appStore.setIsMobile(false)
  }
}
window.addEventListener('resize', useThrottleFn(resizeHandler, 300))
