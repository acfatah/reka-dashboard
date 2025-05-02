<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { Primitive } from 'reka-ui'
import type { BadgeVariants } from '.'
import { badgeVariants } from '.'

const props = withDefaults(defineProps<{
  variant?: BadgeVariants['variant']
  class?: HTMLAttributes['class']
  as?: string
  asChild?: boolean
}>(), {
  as: 'span',
})
</script>

<template>
  <Primitive
    data-slot="badge"
    :as="as"
    :class="cn(badgeVariants({ variant }), props.class)"
    :as-child="asChild"
  >
    <slot />
  </Primitive>
</template>
