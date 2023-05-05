<template>
  <router-view v-slot="{ Component, route }">
    <transition name="slide-fade" mode="out-in" appear>
      <keep-alive v-if="route.meta.cache" :include="cacheViews">
        <component :is="Component" :key="route.fullPath"></component>
      </keep-alive>
      <component v-else :is="Component" :key="route.fullPath"></component>
    </transition>
  </router-view>
</template>

<script lang="ts" setup>
import { useCachedViewStore } from '@/stores/cachedView'
import { computed } from 'vue'

const cachedViewStore = useCachedViewStore()

const cacheViews = computed(() => {
  return cachedViewStore.cachedViewArr
})
</script>
<style lang="scss"></style>
