<script setup lang="ts">
import type { SelectTriggerProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { Icon } from '@iconify/vue'
import { SelectIcon, SelectTrigger, useForwardProps } from 'reka-ui'
import { computed } from 'vue'

const props = defineProps<SelectTriggerProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <SelectTrigger
    v-bind="forwardedProps"
    :class="cn(
      'flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input px-3 py-2 shadow-sm ring-offset-background',
      'bg-transparent text-start text-sm [&>span]:truncate',
      'focus:ring-1 focus:ring-ring focus:outline-none',
      'data-[placeholder]:text-muted-foreground',
      'disabled:cursor-not-allowed disabled:opacity-50',
      props.class,
    )"
  >
    <slot />
    <SelectIcon as-child>
      <Icon
        icon="lucide:chevrons-up-down"
        class="shrink-0 opacity-50"
        width="16"
        height="16"
      />
    </SelectIcon>
  </SelectTrigger>
</template>
