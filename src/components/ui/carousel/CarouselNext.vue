<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Iconify } from '@/components/ui/icon'
import { cn } from '@/lib/utils'
import type { WithClassAsProps } from './interface'
import { useCarousel } from './useCarousel'

const props = defineProps<WithClassAsProps>()
const { orientation, canScrollNext, scrollNext } = useCarousel()
</script>

<template>
  <Button
    :disabled="!canScrollNext"
    :class="cn(
      'touch-manipulation absolute h-8 w-8 rounded-full p-0',
      orientation === 'horizontal'
        ? '-right-12 top-1/2 -translate-y-1/2'
        : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
      props.class,
    )"
    variant="outline"
    @click="scrollNext"
  >
    <slot>
      <Iconify icon="radix-icons:arrow-right" class="size-4 text-current" />
      <span class="sr-only">Next Slide</span>
    </slot>
  </Button>
</template>
