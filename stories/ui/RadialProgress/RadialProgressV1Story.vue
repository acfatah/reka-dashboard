<script setup lang="ts">
const progress = ref(0)
const sleep = (miliseconds: number) => new Promise(r => setTimeout(r, miliseconds))

function increment() {
  const random = Math.min(Math.floor(Math.random() * 30) + 1, 100 - progress.value)

  progress.value = Math.min(progress.value + random, 100)
}

onMounted(async () => {
  while (progress.value < 100) {
    await sleep(Math.random() * 1000)
    increment()
  }

  progress.value = 100
})
</script>

<template>
  <RadialProgressV1 v-model="progress" />
</template>
