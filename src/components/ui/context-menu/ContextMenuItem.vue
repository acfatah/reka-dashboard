<script setup lang="ts">
import type { ContextMenuItemEmits, ContextMenuItemProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import {
  ContextMenuItem,
  useForwardPropsEmits,
} from 'reka-ui'
import { computed } from 'vue'
import type { ContextMenuItemVariants } from '.'
import { contextMenuItemVariants } from '.'

const props = defineProps<ContextMenuItemProps & {
  variant?: ContextMenuItemVariants['variant']
  class?: HTMLAttributes['class']
  inset?: boolean
}>()
const emits = defineEmits<ContextMenuItemEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <ContextMenuItem
    data-slot="context-menu-item"
    v-bind="forwarded"
    :class="cn(
      contextMenuItemVariants({ variant }),
      inset && 'pl-8',
      props.class,
    )"
  >
    <slot />
  </ContextMenuItem>
</template>
