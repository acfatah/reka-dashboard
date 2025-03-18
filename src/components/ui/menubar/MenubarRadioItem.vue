<script setup lang="ts">
import type { MenubarRadioItemEmits, MenubarRadioItemProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { Iconify } from '@/components/ui/icon'
import { cn } from '@/lib/utils'
import {
  MenubarItemIndicator,
  MenubarRadioItem,
  useForwardPropsEmits,
} from 'reka-ui'
import { computed } from 'vue'

const props = defineProps<MenubarRadioItemProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<MenubarRadioItemEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <MenubarRadioItem
    v-bind="forwarded"
    :class="cn(
      'relative flex items-center rounded-sm py-1.5 pr-2 pl-8 outline-none',
      'cursor-default text-sm select-none',
      'focus:bg-accent focus:text-accent-foreground',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      props.class,
    )"
  >
    <span class="absolute left-2 flex size-3.5 items-center justify-center">
      <MenubarItemIndicator>
        <Iconify icon="radix-icons:dot-filled" class="size-4 fill-current" />
      </MenubarItemIndicator>
    </span>
    <slot />
  </MenubarRadioItem>
</template>
