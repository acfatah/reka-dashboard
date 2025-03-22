<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { TooltipArrow } from 'reka-ui'

const props = defineProps<{ class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <TooltipArrow
    v-bind="delegatedProps"
    :class="cn(
      'fill-primary',
      props.class,
    )"
  >
    <slot />
  </TooltipArrow>
</template>
