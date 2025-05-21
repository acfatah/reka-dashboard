<script setup lang="ts">
import type { TagsInputRootEmits, TagsInputRootProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import { TagsInputRoot, useForwardPropsEmits } from 'reka-ui'
import { ref } from 'vue'
import { cn } from '@/lib/utils'
import { provideTagsInputContext } from '.'

const props = defineProps<TagsInputRootProps & {
  class?: HTMLAttributes['class']
}>()

const emits = defineEmits<TagsInputRootEmits>()

const delegatedProps = reactiveOmit(props, 'class')
const forwarded = useForwardPropsEmits(delegatedProps, emits)
const focused = ref(false)

provideTagsInputContext({
  focused,
})
</script>

<template>
  <TagsInputRoot
    v-bind="forwarded"
    :class="cn(
      'flex flex-wrap items-center gap-2 px-3 py-1.5',
      'rounded-md border border-input bg-background',
      'text-sm',
      'aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40',
      focused && 'border-ring ring-[3px] ring-ring/50',
      props.class,
    )"
  >
    <slot />
  </TagsInputRoot>
</template>
