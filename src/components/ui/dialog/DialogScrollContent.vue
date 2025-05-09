<script setup lang="ts">
import type { DialogContentEmits, DialogContentProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { Icon } from '@iconify/vue'
import {
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  useForwardPropsEmits,
} from 'reka-ui'
import { computed } from 'vue'

const props = defineProps<DialogContentProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<DialogContentEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <DialogPortal>
    <DialogOverlay
      data-slot="dialog-overlay"
      :class="cn(
        'fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80',
        'data-[state=closed]:animate-out data-[state=closed]:fade-out-0',
        'data-[state=open]:animate-in data-[state=open]:fade-in-0',
      )"
    >
      <DialogContent
        data-slot="dialog-content"
        :class="cn(
          'relative z-50 my-8 grid  max-w-[calc(100%-2rem)] gap-4 p-6',
          'rounded-lg border bg-background shadow-lg',
          'duration-200',
          'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
          'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
          'sm:max-w-lg',
          props.class,
        )"
        v-bind="forwarded"
        @pointer-down-outside="(event) => {
          const originalEvent = event.detail.originalEvent;
          const target = originalEvent.target as HTMLElement;
          if (originalEvent.offsetX > target.clientWidth || originalEvent.offsetY > target.clientHeight) {
            event.preventDefault();
          }
        }"
      >
        <slot />

        <DialogClose
          data-slot="dialog-close"
          :class="cn(
            'absolute top-3 right-4',
            'rounded-sm opacity-70 ring-offset-background',
            'focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden',
            'transition-opacity hover:opacity-100',
            'disabled:pointer-events-none',
            'data-[state=open]:bg-accent data-[state=open]:text-muted-foreground',
            '[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=\\\'size-\\\'])]:size-4',
          )"
        >
          <Icon icon="lucide:x" />
          <span class="sr-only">Close</span>
        </DialogClose>
      </DialogContent>
    </DialogOverlay>
  </DialogPortal>
</template>
