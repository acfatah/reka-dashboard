<script setup lang="ts">
import type { ToggleGroupItemProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import { ToggleGroupItem, useForwardProps } from 'reka-ui'
import { cn } from '@/lib/utils'
import type { ButtonGroupVariants } from '.'
import { buttonGroupVariants, injectButtonGroupContext } from '.'

const props = defineProps<ToggleGroupItemProps & {
  class?: HTMLAttributes['class']
  variant?: ButtonGroupVariants['variant']
  size?: ButtonGroupVariants['size']
}>()

const { variant, size } = injectButtonGroupContext()
const delegatedProps = reactiveOmit(props, 'class')
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
