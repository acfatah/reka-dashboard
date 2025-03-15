<script setup lang="ts">
import type { VariantProps } from 'class-variance-authority'
import type { ToggleGroupRootEmits, ToggleGroupRootProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { ToggleGroupRoot, useForwardPropsEmits } from 'reka-ui'
import { computed, provide, reactive } from 'vue'
import type { buttonGroupVariants } from '.'

type ButtonGroupVariants = VariantProps<typeof buttonGroupVariants>

const props = defineProps<ToggleGroupRootProps & {
  class?: HTMLAttributes['class']
  variant?: ButtonGroupVariants['variant']
  size?: ButtonGroupVariants['size']
  orientation?: ButtonGroupVariants['orientation']
}>()

const emits = defineEmits<ToggleGroupRootEmits>()

provide('buttonGroup', reactive({
  variant: computed(() => props.variant),
  size: computed(() => props.size),
}))

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})

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
