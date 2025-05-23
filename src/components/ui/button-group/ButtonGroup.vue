<script setup lang="ts">
import type { ToggleGroupRootEmits, ToggleGroupRootProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import { ToggleGroupRoot, useForwardPropsEmits } from 'reka-ui'
import { cn } from '@/lib/utils'
import type { ButtonGroupVariants } from '.'
import { provideButtonGroupContext } from '.'

const props = defineProps<ToggleGroupRootProps & {
  class?: HTMLAttributes['class']
  variant?: ButtonGroupVariants['variant']
  size?: ButtonGroupVariants['size']
  orientation?: ButtonGroupVariants['orientation']
}>()

const emits = defineEmits<ToggleGroupRootEmits>()

provideButtonGroupContext({
  variant: computed(() => props.variant),
  size: computed(() => props.size),
  orientation: computed(() => props.orientation),
})

const delegatedProps = reactiveOmit(props, 'class')
const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <ToggleGroupRoot
    v-bind="forwarded"
    :class="cn(
      'inline-flex w-min',
      props.class,
      props.orientation === 'vertical' && 'flex-col',
      props.variant === 'outline' && 'border rounded-[var(--radius)]',
    )"
  >
    <slot />
  </ToggleGroupRoot>
</template>
