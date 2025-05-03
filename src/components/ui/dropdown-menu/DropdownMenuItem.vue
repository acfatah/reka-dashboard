<script setup lang="ts">
import type { DropdownMenuItemProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { DropdownMenuItem, useForwardProps } from 'reka-ui'
import { computed } from 'vue'

const props = defineProps<DropdownMenuItemProps & {
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
  <DropdownMenuItem
    data-slot="dropdown-menu-item"
    v-bind="forwardedProps"
    :class="cn(
      'relative flex cursor-default items-center gap-2 px-2 py-1.5',
      'rounded-sm outline-hidden',
      'text-sm select-none',
      'transition-colors',
      'focus:bg-accent focus:text-accent-foreground',
      '[&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-muted-foreground',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      'data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20',
      '[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=\'size-\'])]:size-4 [&_svg:not([class*=\'text-\'])]:text-muted-foreground data-[variant=destructive]:*:[svg]:!text-destructive',
      inset && 'pl-8',
      props.class,
    )"
  >
    <slot />
  </DropdownMenuItem>
</template>
