<script setup lang="ts">
import type { SelectScrollUpButtonProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { Icon } from '@iconify/vue'
import { SelectScrollUpButton, useForwardProps } from 'reka-ui'
import { computed } from 'vue'

const props = defineProps<SelectScrollUpButtonProps & {
  class?: HTMLAttributes['class']
}>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <SelectScrollUpButton v-bind="forwardedProps" :class="cn('flex cursor-default items-center justify-center py-1', props.class)">
    <slot>
      <Icon icon="radix-icons:chevron-up" width="24" height="24" />
    </slot>
  </SelectScrollUpButton>
</template>
