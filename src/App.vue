<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Layout from '@/layout/default/index.vue'
</script>

<template>
  <el-config-provider>
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </header>
    <Layout></Layout>
  </el-config-provider>
</template>

<style scoped></style>
