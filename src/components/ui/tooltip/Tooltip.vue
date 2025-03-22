<script setup lang="ts">
const props = withDefaults(defineProps<{
  disabled?: boolean
  side?: 'top' | 'right' | 'bottom' | 'left'
  text?: string
  class?: string
}>(), {
  side: 'top',
  text: '',
})
</script>

<template>
  <slot v-if="props.disabled" />
  <TooltipProvider v-else>
    <TooltipRoot>
      <TooltipTrigger as-child>
        <slot />
      </TooltipTrigger>
      <TooltipContent :side="props.side">
        <slot name="content" />
        {{ props.text }}
        <TooltipArrow />
      </TooltipContent>
    </TooltipRoot>
  </TooltipProvider>
</template>
