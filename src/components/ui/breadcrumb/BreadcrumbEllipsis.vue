<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { Icon } from '@iconify/vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <span
    data-slot="breadcrumb-ellipsis"
    role="presentation"
    aria-hidden="true"
    :class="cn(
      'flex items-center justify-center',
      props.class,
    )"
  >
    <slot>
      <Icon icon="lucide:more-horizontal" />
    </slot>
    <span class="sr-only">More</span>
  </span>
</template>
