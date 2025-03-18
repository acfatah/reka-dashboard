<script setup lang="ts">
import type { MenubarItemEmits, MenubarItemProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { MenubarItem, useForwardPropsEmits } from 'reka-ui'
import { computed } from 'vue'

const props = defineProps<MenubarItemProps & { class?: HTMLAttributes['class'], inset?: boolean }>()
const emits = defineEmits<MenubarItemEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <MenubarItem
    v-bind="forwarded"
    :class="cn(
      'relative flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none',
      'focus:bg-accent focus:text-accent-foreground',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      inset && 'pl-8',
      props.class,
    )"
  >
    <slot />
  </MenubarItem>
</template>
