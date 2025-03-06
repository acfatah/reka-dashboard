<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { computed } from 'vue'

import { cn } from '@/lib/utils'
import { AccordionContent } from 'reka-ui'

const props = defineProps<{ class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <AccordionContent
    v-bind="delegatedProps"
    class="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
  >
    <div :class="cn('pb-4 pt-0', props.class)">
      <slot />
    </div>
  </AccordionContent>
</template>
