<script setup lang="ts">
import type { PaginationPrevProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { Button } from '@/components/ui/button'
import { Iconify } from '@/components/ui/icon'
import { cn } from '@/lib/utils'
import { PaginationPrev } from 'reka-ui'
import { computed } from 'vue'

const props = withDefaults(defineProps<PaginationPrevProps & {
  class?: HTMLAttributes['class']
}>(), {
  asChild: true,
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <PaginationPrev v-bind="delegatedProps">
    <Button :class="cn('w-9 h-9 p-0', props.class)" variant="outline">
      <slot>
        <Iconify icon="lucide:chevron-left" class="size-4" />
      </slot>
    </Button>
  </PaginationPrev>
</template>
