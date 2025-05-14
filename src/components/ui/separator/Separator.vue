<script setup lang="ts">
import type { SeparatorProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { reactiveOmit } from '@vueuse/core'
import { Separator } from 'reka-ui'

const props = withDefaults(defineProps<SeparatorProps & {
  class?: HTMLAttributes['class']
  label?: string
}
>(), {
  orientation: 'horizontal',
  decorative: true,
})

const delegatedProps = reactiveOmit(props, 'class')
</script>

<template>
  <Separator
    data-slot="separator-root"
    v-bind="delegatedProps"
    :data-orientation="orientation"
    :class="cn(
      'relative shrink-0 bg-border',
      `data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full`,
      `data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px`,
      `data-[orientation=horizontal]:[&[data-slot=separator-label]]:w-px data-[orientation=horizontal]:[&[data-slot=separator-label]]:px data-[orientation=horizontal]:[&[data-slot=separator-label]]:py-2`,
      `data-[orientation=vertical]:[&[data-slot=separator-label]]:h-px data-[orientation=vertical]:[&[data-slot=separator-label]]:py data-[orientation=vertical]:[&[data-slot=separator-label]]:px-2`,
      props.class,
    )"
  >
    <span
      v-if="props.label"
      data-slot="separator-label"
      :class="cn(
        'absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center',
        'bg-background text-xs text-muted-foreground',
      )"
    >{{ props.label }}</span>
  </Separator>
</template>
