<script setup lang="ts">
import type { PinInputInputProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { PinInputInput, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { injectPinInputContext } from '.'

const props = defineProps<PinInputInputProps & { class?: HTMLAttributes['class'] }>()
const { disabled } = injectPinInputContext()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <PinInputInput
    v-bind="forwardedProps"
    :class="cn(
      'relative flex h-9 w-9 items-center justify-center border-y border-r',
      'border-input text-center text-sm ',
      'transition-all',
      'first:rounded-l-md first:border-l last:rounded-r-md',
      'focus:relative focus:z-10 focus:ring-2 focus:ring-ring focus:outline-none',
      disabled && 'cursor-not-allowed opacity-50',
      props.class,
    )"
  />
</template>

<style lang="css" scoped>
/**
 * The following styles are used to hide the password reveal toggle on the pin input.
 */

/* https://learn.microsoft.com/en-us/microsoft-edge/web-platform/password-reveal */
::-ms-reveal {
  display: none;
}

input[type='password'] {
  -webkit-text-security: none;
  -moz-text-security: none;
}
</style>
