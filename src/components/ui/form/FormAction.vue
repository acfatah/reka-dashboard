<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { computed } from 'vue'

const props = defineProps<{
  justifyEnd?: boolean
  class?: HTMLAttributes['class']
}>()

const delegatedProps = computed(() => {
  const { class: _, justifyEnd, ...delegated } = props

  return { ...delegated }
})
</script>

<template>
  <div
    v-bind="delegatedProps"
    :class="cn(
      'flex gap-2 mt-6',
      [props.justifyEnd && 'flex-row-reverse'],
      props.class,
    )"
  >
    <slot />
  </div>
</template>
