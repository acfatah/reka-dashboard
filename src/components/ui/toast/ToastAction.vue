<script setup lang="ts">
import type { ToastActionProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import { ToastAction } from 'reka-ui'
import { cn } from '@/lib/utils'

const props = defineProps<ToastActionProps & {
  class?: HTMLAttributes['class']
}>()

const delegatedProps = reactiveOmit(props, 'class')
</script>

<template>
  <ToastAction
    v-bind="delegatedProps"
    :class="cn(
      'inline-flex h-8 shrink-0 items-center justify-center rounded-md border px-3',
      'bg-transparent text-sm font-medium',
      'transition-colors',
      'hover:bg-secondary',
      'focus:outline-none focus:ring-1 focus:ring-ring',
      'group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:focus:ring-destructive',
      'group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground',
      'disabled:pointer-events-none disabled:opacity-50',
      props.class,
    )"
  >
    <slot />
  </ToastAction>
</template>
