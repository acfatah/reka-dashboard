<script setup lang="ts">
import type { VariantProps } from 'class-variance-authority'
import type { ToggleGroupItemProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { ToggleGroupItem, useForwardProps } from 'reka-ui'
import { computed, inject } from 'vue'
import { buttonGroupVariants } from '.'

const props = defineProps<ToggleGroupItemProps & {
  class?: HTMLAttributes['class']
  variant?: ButtonGroupVariants['variant']
  size?: ButtonGroupVariants['size']
}>()

type ButtonGroupVariants = VariantProps<typeof buttonGroupVariants>

const context = inject<ButtonGroupVariants>('buttonGroup')

const delegatedProps = computed(() => {
  const { class: _, variant, size, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <ToggleGroupItem
    v-bind="forwardedProps"
    :class="cn(
      buttonGroupVariants({
        variant: context?.variant || props.variant,
        size: context?.size || props.size,
      }),
      props.class,
    )"
  >
    <slot />
  </ToggleGroupItem>
</template>
