<script setup lang="ts">
import type { AvatarFallbackProps } from 'reka-ui'
import { AvatarFallback } from 'reka-ui'

const props = defineProps<AvatarFallbackProps>()
</script>

<template>
  <AvatarFallback
    data-slot="avatar-fallback"
    v-bind="props"
    :class="cn(
      'flex size-full items-center justify-center rounded-full bg-muted',
    )"
  >
    <slot />
  </AvatarFallback>
</template>
