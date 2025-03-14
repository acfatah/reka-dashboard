<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Iconify } from '@/components/ui/icon'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <li
    role="presentation"
    aria-hidden="true"
    :class="cn('[&>svg]:size-3.5', props.class)"
  >
    <slot>
      <Iconify icon="radix-icons:chevron-right" />
    </slot>
  </li>
</template>
