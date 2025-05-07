<script setup lang="ts">
import type { IconifyIconProps } from '@iconify/vue'
import { Icon } from '@iconify/vue'

const props = withDefaults(defineProps<IconifyIconProps>(), {
  width: '24',
  height: '24',
})
</script>

<template>
  <Icon v-bind="props" />
</template>
