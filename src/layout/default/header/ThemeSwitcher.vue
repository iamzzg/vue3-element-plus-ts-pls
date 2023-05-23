<template>
  <el-switch
    class="theme-switcher"
    v-model="isDark"
    inline-prompt
    :active-icon="Moon"
    :inactive-icon="Sunny"
  />
</template>

<script lang="ts" setup>
import { Sunny, Moon } from '@element-plus/icons-vue'
import { ThemeEnum } from '@/enums/appEnum'
import { useAppStore } from '@/stores/modules/appSetting'
import { computed } from 'vue'

const appStore = useAppStore()

const isDark = computed({
  get() {
    return appStore.isDark
  },
  set(v) {
    if (v) {
      appStore.setTheme(ThemeEnum.DARK)
    } else {
      appStore.setTheme(ThemeEnum.LIGHT)
    }
  }
})
</script>
<style lang="scss" scoped>
.theme-switcher {
  :deep(.el-icon) {
    svg {
      font-weight: bolder;
      color: orange !important;
    }
  }
}
</style>
