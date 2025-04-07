<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { Icon } from '@iconify/vue'

const props = defineProps<{ class?: HTMLAttributes['class'] }>()
</script>

<template>
  <li
    role="presentation"
    aria-hidden="true"
    :class="cn('[&>svg]:size-3.5', props.class)"
  >
    <slot>
      <Icon icon="radix-icons:chevron-right" width="16" height="16" />
    </slot>
  </li>
</template>
