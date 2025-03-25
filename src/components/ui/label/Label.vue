<script setup lang="ts">
import type { LabelProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { Label, useForwardProps } from 'reka-ui'
import { computed, inject } from 'vue'

const props = defineProps<LabelProps & {
  class?: HTMLAttributes['class']
  disabled?: boolean
}>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
const disabled = inject('disabled', false)
</script>

<template>
  <Label
    v-bind="forwardedProps"
    :class="cn(
      'text-sm font-medium leading-none',
      'peer-disabled:cursor-not-allowed peer-disabled:opacity-50 disabled:cursor-not-allowed',
      props.class,
      { 'opacity-50 cursor-not-allowed': props.disabled || disabled },
    )"
  >
    <slot />
  </Label>
</template>
