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
      v-bind="delegatedProps"
      :class="cn(
        'flex flex-1 items-center justify-between py-4',
        'text-sm font-medium hover:underline',
        'transition-all',
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
