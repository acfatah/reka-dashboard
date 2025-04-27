<script setup lang="ts">
import type { TagsInputRootEmits, TagsInputRootProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { TagsInputRoot, useForwardPropsEmits } from 'reka-ui'
import { computed, ref } from 'vue'
import { provideTagsInputContext } from '.'

const props = defineProps<TagsInputRootProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<TagsInputRootEmits>()
const focus = ref(false)

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)

provideTagsInputContext({
  focus,
})
</script>

<template>
  <TagsInputRoot
    v-bind="forwarded"
    :class="cn(
      'flex flex-wrap items-center gap-2 rounded-md border px-3 py-1.5 text-sm',
      'border-input bg-background',
      focus && 'ring-1 ring-ring outline-none',
      props.class,
    )"
  >
    <slot />
  </TagsInputRoot>
</template>
