<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'

const props = withDefaults(defineProps<{
  disabled?: boolean
}>(), {
  disabled: false,
})
</script>

<template>
  <div class="flex items-center space-x-2">
    <Checkbox id="terms" :disabled="props.disabled" />
    <label
      for="terms"
      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
    >
      Accept terms and conditions
    </label>
  </div>
</template>
