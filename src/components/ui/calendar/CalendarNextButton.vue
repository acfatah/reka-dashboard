<script lang="ts" setup>
import type { CalendarNextProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Icon } from '@iconify/vue'
import { CalendarNext, useForwardProps } from 'reka-ui'
import { computed } from 'vue'

const props = defineProps<CalendarNextProps & {
  class?: HTMLAttributes['class']
}>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <CalendarNext
    data-slot="calendar-next-button"
    :class="cn(
      buttonVariants({ variant: 'outline' }),
      'absolute right-1 size-7 p-0',
      'bg-transparent opacity-50',
      'hover:opacity-100',
      props.class,
    )"
    v-bind="forwardedProps"
  >
    <slot>
      <Icon icon="lucide:chevron-right" />
    </slot>
  </CalendarNext>
</template>
