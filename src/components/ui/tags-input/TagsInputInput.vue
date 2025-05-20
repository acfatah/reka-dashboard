<script setup lang="ts">
import type { TagsInputInputProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import { TagsInputInput, useForwardProps } from 'reka-ui'
import { cn } from '@/lib/utils'
import { injectTagsInputContext } from '.'

const props = defineProps<TagsInputInputProps & {
  class?: HTMLAttributes['class']
}>()

const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)
const { focused } = injectTagsInputContext()
</script>

<template>
  <TagsInputInput
    v-bind="forwardedProps"
    :class="cn(
      'min-h-5 flex-1 bg-transparent px-1',
      'text-sm',
      'focus:outline-none',
      props.class,
    )"
    @focus="focused = true"
    @blur="focused = false"
  />
</template>
