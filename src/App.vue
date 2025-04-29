<script setup lang="ts">
import BlankLayout from '@/layouts/BlankLayout.vue'
import { useDark } from '@vueuse/core'

useDark()
</script>

<template>
  <Teleport to="body">
    <Toaster />
  </Teleport>
  <component :is="$route.meta.layout || BlankLayout" />
</template>
