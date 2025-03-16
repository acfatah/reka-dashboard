<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Iconify } from '@/components/ui/icon'
import { cn } from '@/lib/utils'
import { useForwardProps } from 'reka-ui'
import { computed, ref, useAttrs } from 'vue'

const props = defineProps<{
  disabled?: boolean
  iconButtonClass?: string
  class?: HTMLAttributes['class']
}>()

const isVisible = ref(false)
const attrs = useAttrs()

const delegatedAttrs = computed(() => {
  const { class: _, ...delegated } = attrs

  delegated.type = isVisible.value ? 'text' : 'password'
  delegated.disabled = props.disabled

  return delegated
})

function toggleReveal() {
  isVisible.value = !isVisible.value
}

const forwardedProps = useForwardProps(delegatedAttrs)
</script>

<template>
  <div class="space-y-2">
    <div class="relative">
      <Input
        v-bind="forwardedProps"
        :type="isVisible ? 'text' : 'password'"
        :class="cn(
          'disabled:select-none',
          props.class,
        )"
        autocomplete="current-password"
      />
      <button
        :class="cn(
          'absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 ring-offset-background',
          'focus-visible:border focus-visible:border-ring focus-visible:text-foreground focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:outline-none',
          'hover:cursor-pointer hover:text-foreground',
          'transition-shadow',
          'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
          props.iconButtonClass,
        )"
        type="button"
        :aria-label="isVisible ? 'Hide password' : 'Show password'"
        :aria-pressed="isVisible"
        :disabled="props.disabled"
        aria-controls="password"
        @click="toggleReveal"
      >
        <Iconify v-show="isVisible" icon="lucide:eye-off" aria-hidden="true" width="20" height="20" />
        <Iconify v-show="!isVisible" icon="lucide:eye" aria-hidden="true" width="20" height="20" />
      </button>
    </div>
  </div>
</template>

<style lang="css" scoped>
/* https://learn.microsoft.com/en-us/microsoft-edge/web-platform/password-reveal */
::-ms-reveal {
  display: none;
}

input[type='password'] {
  -webkit-text-security: none;
  -moz-text-security: none;
}
</style>
