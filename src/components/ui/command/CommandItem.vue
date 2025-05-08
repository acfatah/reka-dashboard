<script setup lang="ts">
import type { ComboboxItemEmits, ComboboxItemProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { ComboboxItem, useForwardPropsEmits } from 'reka-ui'
import { computed } from 'vue'

const props = defineProps<ComboboxItemProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<ComboboxItemEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <ComboboxItem
    v-bind="forwarded"
    :class="cn(
      'relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      'data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground ',
      '[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=\'size-\'])]:size-4 [&_svg:not([class*=\'text-\'])]:text-muted-foreground',

      // Combobox highlightOnHover state: https://reka-ui.com/docs/components/combobox#root
      'data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground',
      props.class,
    )"
  >
    <slot />
  </ComboboxItem>
</template>
