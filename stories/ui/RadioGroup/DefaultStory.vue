<script setup lang="ts">
const props = withDefaults(defineProps<{
  disabled?: boolean
}>(), {
  disabled: false,
})
</script>

<template>
  <RadioGroup
    default-value="comfortable"
    orientation="vertical"
    :disabled="props.disabled"
  >
    <div class="flex flex-row space-x-2">
      <RadioGroupItem id="r1" value="default" />
      <Label for="r1">Default</Label>
    </div>
    <div class="flex flex-row space-x-2">
      <RadioGroupItem id="r2" value="comfortable" />
      <Label for="r2">Comfortable</Label>
    </div>
    <div class="flex flex-row space-x-2">
      <RadioGroupItem id="r3" value="compact" />
      <Label for="r3">Compact</Label>
    </div>
  </RadioGroup>
</template>
