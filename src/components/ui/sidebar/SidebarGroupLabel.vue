<script setup lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { Primitive } from 'reka-ui'

const props = defineProps<PrimitiveProps & {
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <Primitive
    data-sidebar="group-label"
    :as="as"
    :as-child="asChild"
    :class="cn(
      'flex h-8 shrink-0 items-center rounded-md px-2 ring-sidebar-ring focus-visible:ring-2',
      'text-xs font-medium text-sidebar-foreground/70',
      '[&>svg]:size-4 [&>svg]:shrink-0',
      'transition-[margin,opa] duration-200 ease-linear outline-none',
      'group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0',
      props.class)"
  >
    <slot />
  </Primitive>
</template>
