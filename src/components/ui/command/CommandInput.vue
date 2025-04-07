<script setup lang="ts">
import type { ComboboxInputProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { Icon } from '@iconify/vue'
import { ComboboxInput, useForwardProps } from 'reka-ui'
import { computed } from 'vue'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<ComboboxInputProps & {
  class?: HTMLAttributes['class']
}>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <div class="flex items-center border-b px-3" cmdk-input-wrapper>
    <Icon
      icon="radix-icons:magnifying-glass"
      class="mr-2 shrink-0 opacity-50"
      width="16"
      height="16"
    />
    <ComboboxInput
      v-bind="{ ...forwardedProps, ...$attrs }"
      auto-focus
      :class="cn(
        'flex h-10 w-full rounded-md bg-transparent py-3',
        'text-sm outline-none placeholder:text-muted-foreground',
        'disabled:cursor-not-allowed disabled:opacity-50',
        props.class,
      )"
    />
  </div>
</template>
