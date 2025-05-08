<script setup lang="ts">
import type { ComboboxContentEmits, ComboboxContentProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { ComboboxContent, useForwardPropsEmits } from 'reka-ui'
import { computed } from 'vue'

const props = withDefaults(defineProps<ComboboxContentProps & {
  class?: HTMLAttributes['class']
  dismissable?: boolean
}>(), {
  dismissable: false,
})

const emits = defineEmits<ComboboxContentEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <ComboboxContent
    data-slot="command-list"
    v-bind="forwarded"
    :class="cn(
      'max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto',
      props.class,
    )"
  >
    <div role="presentation">
      <slot />
    </div>
  </ComboboxContent>
</template>
