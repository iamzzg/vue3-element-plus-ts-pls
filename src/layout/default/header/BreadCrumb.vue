<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="item in titles" :key="item.path" :to="{ path: item.path }">
      {{ item.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import type { AppRouteRecordRaw } from '@/router/types'
import { onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'

defineOptions({
  name: 'HeaderBreadCrumb'
})

const router = useRouter()
const titles = ref<Record<'path' | 'title', string>[]>([])

const getBreadCrumbTitle = (matchRoutes: AppRouteRecordRaw[]) => {
  const titles = matchRoutes
    .filter((route) => !route.meta?.hideBreadCrumb)
    .map((route) => {
      const { meta, path } = route
      return {
        path,
        title: meta?.title!
      }
    })

  return titles
}

const updateTitles = () => {
  titles.value = getBreadCrumbTitle(router.currentRoute.value.matched)
}

onMounted(() => {
  updateTitles()
})

watch(
  () => router.currentRoute.value,
  () => {
    updateTitles()
  }
)
</script>
<style lang="scss"></style>
