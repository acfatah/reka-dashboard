<script setup lang="ts">
import BlankLayout from '@/layouts/BlankLayout.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <Teleport to="body">
    <Toaster />
  </Teleport>
  <component :is="route.meta.layout || BlankLayout" />
</template>
