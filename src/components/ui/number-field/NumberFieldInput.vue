<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { NumberFieldInput } from 'reka-ui'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <NumberFieldInput
    data-slot="input"
    :class="cn(
      'flex h-9 w-full py-1',
      'rounded-md border border-input bg-transparent shadow-sm',
      'text-center text-sm',
      'transition-colors',
      'placeholder:text-muted-foreground',
      'focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none',
      'disabled:cursor-not-allowed disabled:opacity-50',
      props.class,
    )"
  />
</template>
