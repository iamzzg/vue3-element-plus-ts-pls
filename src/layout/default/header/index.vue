<template>
  <div class="layout-header">
    <nav>
      <RouterLink class="app-link" to="/">Home</RouterLink>
      <RouterLink class="app-link" to="/about">About</RouterLink>
      <RouterLink class="app-link" to="/404">404</RouterLink>
    </nav>
  </div>
</template>

<script lang="ts" setup></script>
<style lang="scss">
.layout-header {
  height: 60px;
  padding: 10px;
  border-bottom: 1px solid #ccc;

  > nav {
    .app-link {
      margin-right: 10px;
    }
  }
}
</style>
