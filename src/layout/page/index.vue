<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="routeTransitionName" mode="out-in" appear>
      <keep-alive v-if="useKeepAlive" :include="cacheViews">
        <component :is="Component" :key="route.fullPath"></component>
      </keep-alive>
      <component v-else :is="Component" :key="route.fullPath"></component>
    </transition>
  </router-view>
</template>

<script lang="ts" setup>
import { useCachedViewStore } from '@/stores/modules/cachedView'
import { computed } from 'vue'
import projSetting from '@/settings/projectSetting'

const cachedViewStore = useCachedViewStore()
const { useKeepAlive, routeTransitionName } = projSetting

const cacheViews = computed(() => {
  return cachedViewStore.cachedViewArr as string[]
})
</script>
<style lang="scss"></style>
