<script setup lang="ts">
import type { DialogCloseProps } from 'reka-ui'
import { DialogClose } from 'reka-ui'

const props = defineProps<DialogCloseProps>()
</script>

<template>
  <DialogClose
    data-slot="dialog-close"
    v-bind="props"
    @click.prevent
  >
    <slot />
  </DialogClose>
</template>
