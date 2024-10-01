<script setup lang="ts">
const games = [{ name: 'Atelier Sophie 2' }]
</script>
<template>
  <div class="flex flex-col">
    <template v-for="game in games" :key="game.name">
      <div class="flex-1 font-bold">
        {{ game.name }}
      </div>
    </template>
  </div>
</template>
