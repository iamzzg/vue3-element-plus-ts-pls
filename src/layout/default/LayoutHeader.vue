<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink class="app-link" to="/">Home</RouterLink>
        <RouterLink class="app-link" to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script lang="ts" setup></script>
<style lang="scss">
.wrapper {
  padding: 10px 40px;
  height: 80px;

  > nav {
    .app-link {
      margin-right: 10px;
    }
  }
}
</style>
