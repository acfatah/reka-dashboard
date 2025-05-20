<script setup lang="ts">
import { useDark } from '@vueuse/core'
import BlankLayout from '@/layouts/BlankLayout.vue'

useDark()
</script>

<template>
  <Teleport to="body">
    <Toaster />
  </Teleport>
  <component :is="$route.meta.layout || BlankLayout" />
</template>
