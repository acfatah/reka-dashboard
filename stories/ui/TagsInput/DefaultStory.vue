<script setup lang="ts">
import { useForwardProps } from 'reka-ui'

const props = defineProps({
  disabled: { type: Boolean, required: false },
})

const modelValue = ref(['Apple', 'Banana'])
const forwardProps = useForwardProps(props)
</script>

<template>
  <TagsInput v-bind="forwardProps" v-model="modelValue">
    <TagsInputItem v-for="item in modelValue" :key="item" :value="item">
      <TagsInputItemText />
      <TagsInputItemDelete />
    </TagsInputItem>
    <TagsInputInput placeholder="Fruits..." />
    <!-- <TagsInputClear /> -->
  </TagsInput>
</template>
