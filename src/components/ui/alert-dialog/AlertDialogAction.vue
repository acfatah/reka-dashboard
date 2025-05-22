<script setup lang="ts">
import type { AlertDialogActionProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { AlertDialogAction } from 'reka-ui'
import { computed } from 'vue'
import type { ButtonVariants } from '@/components/ui/button'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const props = withDefaults(defineProps<AlertDialogActionProps & {
  class?: HTMLAttributes['class']
  variant?: ButtonVariants['variant']
}>(), {
  variant: 'default',
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <AlertDialogAction
    v-bind="delegatedProps"
    :class="cn(
      buttonVariants({ variant }),
      props.class,
    )"
  >
    <slot />
  </AlertDialogAction>
</template>
