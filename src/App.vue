<script setup lang="ts">
import BlankLayout from '@/components/layouts/BlankLayout.vue'

const route = useRoute()
</script>

<template>
  <Teleport to="body">
    <Toaster />
  </Teleport>
  <component :is="route.meta.layout || BlankLayout" />
</template>
