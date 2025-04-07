<script setup lang="ts">
import type { TagsInputItemDeleteProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { Icon } from '@iconify/vue'
import { TagsInputItemDelete, useForwardPropsEmits } from 'reka-ui'
import { computed } from 'vue'

const props = defineProps<TagsInputItemDeleteProps & {
  class?: HTMLAttributes['class']
}>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardPropsEmits(delegatedProps)
</script>

<template>
  <TagsInputItemDelete
    v-bind="forwardedProps"
    :class="cn(
      'mr-1 flex cursor-pointer rounded bg-transparent',
      props.class,
    )"
  >
    <slot>
      <Icon icon="lucide:x" width="14" height="14" />
    </slot>
  </TagsInputItemDelete>
</template>
