<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import { cn } from '@/lib/utils'

const props = defineProps<{
  justifyEnd?: boolean
  class?: HTMLAttributes['class']
}>()

const delegatedProps = reactiveOmit(props, 'class', 'justifyEnd')
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
