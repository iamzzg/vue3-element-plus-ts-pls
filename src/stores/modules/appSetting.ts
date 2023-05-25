import { defineStore } from 'pinia'
import { store } from '@/stores/index'

import { ThemeEnum } from '@/enums/appEnum'
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
  showLogo: boolean
}

const html = document.querySelector('html') as HTMLElement

export const useAppStore = defineStore('appSetting', {
  state: (): AppSetting => {
    let initialTheme = (JSON.parse(localStorage.getItem('appSetting') as string) as AppSetting)
      ?.theme
    initialTheme = initialTheme ? initialTheme : ThemeEnum.LIGHT
    html.classList.add(initialTheme)
    return {
      theme: ThemeEnum.LIGHT,
      menuList: [],
      menuSetting: {
        isCollapsed: false,
        showMenu: true
      },
      isMobile: false,
      showLogo: true
    }
  },
  getters: {
    isDark(): boolean {
      return this.theme == ThemeEnum.DARK
    },
    menuCollapsed(): boolean {
      return this.menuSetting.isCollapsed
    },
    showMenu(): boolean {
      return this.menuSetting.showMenu
    }
  },
  actions: {
    toggleTheme() {
      if (this.isDark) {
        this.setTheme(ThemeEnum.LIGHT)
      } else {
        this.setTheme(ThemeEnum.DARK)
      }
    },
    setTheme(theme: ThemeEnum) {
      html.classList.toggle(this.theme)
      this.theme = theme
      html.classList.add(this.theme)
    },
    setMenuList(_menuList: AppRouteRecordRaw[]) {
      this.menuList = _menuList
    },
    setIsMobile(isMobile: boolean) {
      this.isMobile = isMobile
      // 移动端不折叠
      if (isMobile) {
        this.setMenuCollapse(false)
      }
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
  },
  persist: {
    key: 'appSetting',
    storage: localStorage
  }
})

export const useAppStoreWithOut = () => {
  return useAppStore(store)
}

const resizeHandler = () => {
  const appStore = useAppStore()
  if (window.innerWidth <= 720) {
    if (appStore.isMobile) return
    appStore.setIsMobile(true)
    appStore.setShowMenu(true)
  } else {
    if (!appStore.isMobile) return
    appStore.setIsMobile(false)
    appStore.setShowMenu(false)
  }
}

window.addEventListener('resize', useThrottleFn(resizeHandler, 50))
