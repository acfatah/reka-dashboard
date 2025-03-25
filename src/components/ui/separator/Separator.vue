<script setup lang="ts">
import type { SeparatorProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { Separator } from 'reka-ui'
import { computed } from 'vue'

const props = defineProps<
  SeparatorProps & { class?: HTMLAttributes['class'], label?: string }
>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <Separator
    v-bind="delegatedProps"
    :class="cn(
      'shrink-0 bg-border relative',
      props.orientation === 'vertical' ? 'w-px h-full' : 'h-px w-full',
      props.class,
    )"
  >
    <span
      v-if="props.label"
      :class="cn(
        'absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center',
        'bg-background text-xs text-muted-foreground',
        props.orientation === 'vertical' ? 'w-[1px] px-1 py-2' : 'h-[1px] py-1 px-2',
      )"
    >{{ props.label }}</span>
  </Separator>
</template>
