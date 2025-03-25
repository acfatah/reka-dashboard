<script setup lang="ts">
import type { MenubarSeparatorProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { MenubarSeparator, useForwardProps } from 'reka-ui'
import { computed } from 'vue'

const props = defineProps<MenubarSeparatorProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <MenubarSeparator
    v-bind="forwardedProps"
    :class="cn('-mx-1 my-1 h-px bg-muted', props.class)"
  />
</template>
