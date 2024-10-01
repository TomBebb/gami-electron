<template>
  <h1>Hello App!</h1>
  <NavDrawer />
  <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>
<script setup lang="ts">
import NavDrawer from '@renderer/components/NavDrawer.vue'
</script>
