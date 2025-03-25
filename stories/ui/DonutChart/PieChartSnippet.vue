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
  <DonutChart
    index="name"
    category="total"
    type="pie"
    :data="data"
    :value-formatter="(tick: number | Date) => {
      return typeof tick === 'number'
        ? `$ ${new Intl.NumberFormat('us').format(tick).toString()}`
        : ''
    }"
  />
</template>
