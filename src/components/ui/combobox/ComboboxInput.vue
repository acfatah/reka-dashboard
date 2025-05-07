<script setup lang="ts">
import type { ComboboxInputEmits, ComboboxInputProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { ComboboxInput, useForwardPropsEmits } from 'reka-ui'
import { computed } from 'vue'

const props = defineProps<ComboboxInputProps & {
  class?: HTMLAttributes['class']
}>()

const emits = defineEmits<ComboboxInputEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <ComboboxInput
    data-slot="combobox-input"
    v-bind="forwarded"
    :class="cn([
      'flex h-8 w-full px-3 py-1',
      'rounded-md border border-input bg-transparent text-sm',
      'transition-colors',
      'file:border-0 file:bg-transparent file:text-sm file:font-medium',
      'placeholder:text-muted-foreground',
      'focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none',
      'disabled:cursor-not-allowed disabled:opacity-50',
      props.class,
    ])"
  >
    <slot />
  </ComboboxInput>
</template>
