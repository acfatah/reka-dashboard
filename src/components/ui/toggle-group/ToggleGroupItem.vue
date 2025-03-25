<script setup lang="ts">
import type { ToggleVariants } from '@/components/ui/toggle'
import type { ToggleGroupItemProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { toggleVariants } from '@/components/ui/toggle'
import { cn } from '@/lib/utils'
import { ToggleGroupItem, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { injectToggleGroupContext } from '.'

const props = defineProps<ToggleGroupItemProps & {
  class?: HTMLAttributes['class']
  variant?: ToggleVariants['variant']
  size?: ToggleVariants['size']
}>()

const { variant, size } = injectToggleGroupContext()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <ToggleGroupItem
    v-bind="forwardedProps"
    :class="cn(toggleVariants({
      variant: props.variant || variant,
      size: props.size || size,
    }), props.class)"
  >
    <slot />
  </ToggleGroupItem>
</template>
