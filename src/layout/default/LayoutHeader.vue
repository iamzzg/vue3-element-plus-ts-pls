<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink class="app-link" to="/">Home</RouterLink>
        <RouterLink class="app-link" to="/about">About</RouterLink>
        <RouterLink class="app-link" to="/404">404</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script lang="ts" setup></script>
<style lang="scss">
.wrapper {
  height: 80px;
  padding: 10px 40px;

  > nav {
    .app-link {
      margin-right: 10px;
    }
  }
}
</style>
