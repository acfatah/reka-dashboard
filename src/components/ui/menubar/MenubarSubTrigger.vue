<script setup lang="ts">
import type { MenubarSubTriggerProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { Icon } from '@iconify/vue'
import { MenubarSubTrigger, useForwardProps } from 'reka-ui'
import { computed } from 'vue'

const props = defineProps<MenubarSubTriggerProps & {
  class?: HTMLAttributes['class']
  inset?: boolean
}>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <MenubarSubTrigger
    v-bind="forwardedProps"
    :class="cn(
      'flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none',
      'focus:bg-accent focus:text-accent-foreground',
      'data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
      inset && 'pl-8',
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
  </MenubarSubTrigger>
</template>
