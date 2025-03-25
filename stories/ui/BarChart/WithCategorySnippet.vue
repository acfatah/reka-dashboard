<script setup lang="ts">
const data = [
  {
    name: 'Jan',
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
  },
  // ...
]
</script>

<template>
  <BarChart
    :data="data"
    index="name"
    :categories="['total', 'predicted']"
    :y-formatter="(tick: number | Date, _i: number) => {
      return typeof tick === 'number'
        ? `$ ${new Intl.NumberFormat('us').format(tick).toString()}`
        : ''
    }"
  />
</template>
