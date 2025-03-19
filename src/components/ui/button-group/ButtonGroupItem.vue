<script setup lang="ts">
import type { ToggleGroupItemProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { ToggleGroupItem, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import type { ButtonGroupVariants } from '.'
import { buttonGroupVariants, injectButtonGroupContext } from '.'

const props = defineProps<ToggleGroupItemProps & {
  class?: HTMLAttributes['class']
  variant?: ButtonGroupVariants['variant']
  size?: ButtonGroupVariants['size']
}>()

const { variant, size } = injectButtonGroupContext()

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
        variant: props.variant || variant,
        size: props.size || size,
      }),
      props.class,
    )"
  >
    <slot />
  </ToggleGroupItem>
</template>
