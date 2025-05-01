<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { Icon } from '@iconify/vue'
import { AccordionHeader, AccordionTrigger } from 'reka-ui'
import { computed } from 'vue'

const props = defineProps<{ class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <AccordionHeader class="flex">
    <AccordionTrigger
      data-slot="accordion-trigger"
      v-bind="delegatedProps"
      :class="cn(
        'flex flex-1 items-start justify-between gap-4 rounded-md py-4',
        'text-left text-sm font-medium',
        'transition-all outline-none',
        'hover:underline focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50',
        'disabled:pointer-events-none disabled:opacity-50',
        '[&[data-state=open]>svg]:rotate-180',
        props.class,
      )"
    >
      <slot />
      <slot name="icon">
        <Icon
          icon="radix-icons:caret-down"
          class="shrink-0 text-muted-foreground transition-transform duration-200"
          width="20"
          height="20"
        />
      </slot>
    </AccordionTrigger>
  </AccordionHeader>
</template>
