<script setup lang="ts">
import type { CollapsibleContentProps } from 'reka-ui'
import { cn } from '@/lib/utils'
import { CollapsibleContent } from 'reka-ui'

const props = defineProps<CollapsibleContentProps>()
</script>

<template>
  <CollapsibleContent
    v-bind="props"
    :class="cn(
      'overflow-hidden transition-all',
      'data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down',
    )"
  >
    <slot />
  </CollapsibleContent>
</template>
