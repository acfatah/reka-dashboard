<script lang="ts" setup>
import type { CalendarNextProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { Icon } from '@iconify/vue'
import { reactiveOmit } from '@vueuse/core'
import { CalendarNext, useForwardProps } from 'reka-ui'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const props = defineProps<CalendarNextProps & {
  class?: HTMLAttributes['class']
}>()

const delegatedProps = reactiveOmit(props, 'class')
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
