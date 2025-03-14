<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Iconify } from '@/components/ui/icon'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <span
    role="presentation"
    aria-hidden="true"
    :class="cn(
      'flex h-9 w-9 items-center justify-center cursor-pointer',
      props.class,
    )"
  >
    <slot>
      <Iconify icon="radix-icons:dots-horizontal" class="size-4" />
    </slot>
    <span class="sr-only">More</span>
  </span>
</template>
