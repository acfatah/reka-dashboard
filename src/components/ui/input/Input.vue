<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { useVModel } from '@vueuse/core'

const props = defineProps<{
  defaultValue?: string | number
  modelValue?: string | number
  class?: HTMLAttributes['class']
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
})
</script>

<template>
  <input
    v-model="modelValue"
    :class="cn(
      'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 shadow-sm',
      'file:border-0 file:bg-transparent file:text-sm file:font-medium',
      'text-sm placeholder:text-muted-foreground',
      'focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none',
      'transition-colors',
      'disabled:cursor-not-allowed disabled:opacity-50',
      props.class,
    )"
  >
</template>
