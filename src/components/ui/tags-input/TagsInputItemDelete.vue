<script setup lang="ts">
import type { TagsInputItemDeleteProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { Icon } from '@iconify/vue'
import { reactiveOmit } from '@vueuse/core'
import { TagsInputItemDelete, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<TagsInputItemDeleteProps & {
  class?: HTMLAttributes['class']
}>()

const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardPropsEmits(delegatedProps)
</script>

<template>
  <TagsInputItemDelete
    v-bind="forwardedProps"
    :class="cn('mr-1 flex rounded bg-transparent', props.class)"
  >
    <slot>
      <Icon icon="lucide:x" />
    </slot>
  </TagsInputItemDelete>
</template>
