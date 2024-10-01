<script setup lang="ts">
import { ref } from 'vue'

const curritem = ref<null | object>(null)
const ipcHandle = () => {
  const res = ipcInvoke('fetch', 1621310)
  console.log(res)
  res.then((v) => (curritem.value = v)).catch(console.error)
}
</script>

<template>
  Current: {{ curritem }}

  <button class="btn btn-primary font-bold" @click="ipcHandle">Fetch curr</button>
</template>

<style scoped></style>
