<script setup lang="ts">
import type { RadioGroupItemProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import {
  RadioGroupIndicator,
  RadioGroupItem,
  useForwardProps,
} from 'reka-ui'
import { computed } from 'vue'

const props = defineProps<RadioGroupItemProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <RadioGroupItem
    v-bind="forwardedProps"
    :class="
      cn(
        'aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow',
        'focus:outline-none focus-visible:ring-1 focus-visible:ring-ring',
        'hover:cursor-pointer',
        'disabled:cursor-not-allowed disabled:opacity-50',
        props.class,
      )
    "
  >
    <RadioGroupIndicator
      :class="cn(
        'relative flex h-full w-full items-center justify-center text-primary',
        'after:block after:h-2 after:w-2 after:rounded-[50%] after:bg-foreground after:content-[\'\'] dark:after:bg-foreground',
      )"
    />
  </RadioGroupItem>
</template>
