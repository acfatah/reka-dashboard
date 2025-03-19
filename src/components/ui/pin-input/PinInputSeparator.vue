<script setup lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import { Iconify } from '@/components/ui/icon'
import { Primitive, useForwardProps } from 'reka-ui'

const props = defineProps<PrimitiveProps>()
const forwardedProps = useForwardProps(props)
</script>

<template>
  <Primitive v-bind="forwardedProps">
    <slot>
      <Iconify icon="radix-icons:dash" class="size-4" />
    </slot>
  </primitive>
</template>
