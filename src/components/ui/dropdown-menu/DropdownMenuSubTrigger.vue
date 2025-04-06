<script setup lang="ts">
import type { DropdownMenuSubTriggerProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { Iconify } from '@/components/ui/icon'
import { cn } from '@/lib/utils'
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
    <Iconify icon="radix-icons:chevron-right" class="ml-auto size-4" />
  </DropdownMenuSubTrigger>
</template>
