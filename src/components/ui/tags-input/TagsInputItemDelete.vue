<script setup lang="ts">
import type { TagsInputItemDeleteProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { Iconify } from '@/components/ui/icon'
import { cn } from '@/lib/utils'
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
      <Iconify icon="lucide:x" class="size-4" />
    </slot>
  </TagsInputItemDelete>
</template>
