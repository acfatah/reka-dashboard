<script setup lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import { Icon } from '@iconify/vue'
import { Primitive, useForwardProps } from 'reka-ui'

const props = defineProps<PrimitiveProps>()
const forwardedProps = useForwardProps(props)
</script>

<template>
  <Primitive v-bind="forwardedProps">
    <slot>
      <Icon icon="radix-icons:dash" width="16" height="16" />
    </slot>
  </primitive>
</template>
