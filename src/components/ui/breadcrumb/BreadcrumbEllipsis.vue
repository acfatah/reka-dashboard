<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { Icon } from '@iconify/vue'

const props = defineProps<{ class?: HTMLAttributes['class'] }>()
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
      <Icon icon="radix-icons:dots-horizontal" width="16" height="16" />
    </slot>
    <span class="sr-only">More</span>
  </span>
</template>
