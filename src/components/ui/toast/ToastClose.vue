<script setup lang="ts">
import type { ToastCloseProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import Iconify from '@/components/ui/icon/Iconify.vue'
import { cn } from '@/lib/utils'
import { ToastClose } from 'reka-ui'
import { computed } from 'vue'

const props = defineProps<ToastCloseProps & {
  class?: HTMLAttributes['class']
}>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <ToastClose
    v-bind="delegatedProps"
    :class="cn(
      'absolute top-1 right-1 rounded-md p-1 text-foreground/50 opacity-0 focus:opacity-100 focus:ring-1 focus:outline-none',
      'transition-opacity',
      'hover:cursor-pointer hover:text-foreground',
      'group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50',
      'group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600',
      props.class)"
  >
    <Iconify icon="radix-icons:cross-2" class="size-4" />
  </ToastClose>
</template>
