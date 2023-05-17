<script setup lang="ts">
import { useAppStore } from '@/stores/modules/appSetting'
import { ref } from 'vue'

defineOptions({
  name: 'Home'
})

const appStore = useAppStore()
const show = ref(true)
const date = ref(new Date())

const test = () => {
  console.log(appStore.theme)
  appStore.toggleTheme()
}

const toggleShow = () => {
  show.value = !show.value
}
</script>

<template>
  <main>
    <el-button type="primary" @click="test">切换主题</el-button>
    <el-button type="primary">fdf</el-button>
    <div class="text-[40px]">fdsf</div>
    <el-button type="primary" @click="toggleShow">切换</el-button>

    <transition name="el-fade-in-linear">
      <div v-if="show" class="w-40 h-40 bg-blue-300 rounded-md"></div>
    </transition>
    <div class="test">hello world</div>

    <el-date-picker v-model="date" type="date" placeholder="Pick a day" />
  </main>
</template>
<style lang="scss" scoped>
.test {
  position: relative;
  height: 20px;
  color: $color-primary;
}
</style>
