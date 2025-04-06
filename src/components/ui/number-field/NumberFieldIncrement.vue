<script setup lang="ts">
import type { NumberFieldIncrementProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { Iconify } from '@/components/ui/icon'
import { cn } from '@/lib/utils'
import { NumberFieldIncrement, useForwardProps } from 'reka-ui'
import { computed } from 'vue'

const props = defineProps<NumberFieldIncrementProps & {
  class?: HTMLAttributes['class']
}>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <NumberFieldIncrement
    data-slot="increment"
    v-bind="forwarded"
    :class="cn(
      'absolute top-1/2 right-0 -translate-y-1/2 p-3 hover:cursor-pointer',
      'disabled:cursor-not-allowed disabled:opacity-20',
      props.class,
    )"
  >
    <slot>
      <Iconify icon="lucide:plus" class="size-4" />
    </slot>
  </NumberFieldIncrement>
</template>
