<script setup lang="ts">
import type { DialogContentEmits, DialogContentProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { Iconify } from '@/components/ui/icon'
import { cn } from '@/lib/utils'
import {
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  useForwardPropsEmits,
} from 'reka-ui'
import { computed } from 'vue'
import type { SheetVariants } from '.'
import { sheetVariants } from '.'

interface SheetContentProps extends DialogContentProps {
  class?: HTMLAttributes['class']
  side?: SheetVariants['side']
}

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<SheetContentProps>()

const emits = defineEmits<DialogContentEmits>()

const delegatedProps = computed(() => {
  const { class: _, side, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <DialogPortal>
    <DialogOverlay
      :class="cn(
        'fixed inset-0 z-50 bg-black/80',
        'data-[state=closed]:animate-out data-[state=closed]:fade-out-0',
        'data-[state=open]:animate-in data-[state=open]:fade-in-0',
      )"
    />
    <DialogContent
      :class="cn(sheetVariants({ side }), props.class)"
      v-bind="{ ...forwarded, ...$attrs }"
    >
      <slot />

      <DialogClose
        :class="cn(
          'absolute top-4 right-4 rounded-sm opacity-70 ring-offset-background',
          'transition-opacity',
          'hover:opacity-100',
          'focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none',
          'data-[state=open]:bg-secondary',
          'disabled:pointer-events-none',
        )"
      >
        <Iconify icon="lucide:x" class="hover:cursor-pointer size-4" />
      </DialogClose>
    </DialogContent>
  </DialogPortal>
</template>
