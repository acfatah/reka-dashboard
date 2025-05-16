<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

const props = defineProps<{
  modelValue?: File | undefined
  class?: HTMLAttributes['class']
  disabled?: boolean
}>()

const emits = defineEmits<{
  'update:modelValue': [payload: File | undefined]
}>()

const inputFile = ref<File>()
</script>

<template>
  <Input
    v-if="!props.modelValue"
    :disabled="props.disabled"
    type="file"
    @change="async (event: InputEvent) => {
      const file = (event.target as HTMLInputElement).files?.[0]

      if (file) {
        inputFile = file
        emits('update:modelValue', file)
      }
    }"
  />
  <div
    v-else
    :disabled="props.disabled"
    :class="cn(
      'flex h-9 w-full min-w-0 items-center justify-between py-1 pr-1 pl-3',
      'rounded-md border border-input bg-transparent shadow-xs outline-none',
      'text-base selection:bg-primary selection:text-primary-foreground',
      'transition-[color,box-shadow]',
      'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
      'md:text-sm dark:bg-input/30',
      'focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50',
      'aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40',
      props.class,
    )"
  >
    <p class="truncate" :class="{ 'text-muted-foreground': props.disabled }">
      {{ inputFile?.name }}
    </p>
    <Button
      :disabled="props.disabled"
      size="icon"
      variant="ghost"
      class="size-[26px] [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
      aria-label="Remove file"
      type="button"
      @click="() => {
        inputFile = undefined
        emits('update:modelValue', undefined)
      }"
    >
      <Icon icon="lucide:trash" />
    </Button>
  </div>
</template>
