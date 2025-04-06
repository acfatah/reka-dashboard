<script setup lang="ts">
import type { IconifyIconProps } from '@iconify/vue'
import { Icon as Iconify } from '@iconify/vue'

const props = withDefaults(defineProps<IconifyIconProps>(), {
  width: '24',
  height: '24',
})
</script>

<template>
  <Iconify v-bind="props" />
</template>
