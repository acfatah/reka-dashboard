<script setup lang="ts">
import type { DropdownMenuSubTriggerProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { Icon } from '@iconify/vue'
import { DropdownMenuSubTrigger, useForwardProps } from 'reka-ui'
import { computed } from 'vue'

const props = defineProps<DropdownMenuSubTriggerProps & {
  class?: HTMLAttributes['class']
}>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <DropdownMenuSubTrigger
    v-bind="forwardedProps"
    :class="cn(
      'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 outline-none',
      'text-sm',
      'focus:bg-accent',
      'data-[state=open]:bg-accent',
      props.class,
    )"
  >
    <slot />
    <Icon
      icon="radix-icons:chevron-right"
      class="ml-auto"
      width="16"
      height="16"
    />
  </DropdownMenuSubTrigger>
</template>
