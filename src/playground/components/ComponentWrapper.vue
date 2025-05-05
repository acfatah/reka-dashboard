<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div
    class="flex w-full scroll-mt-16 flex-col rounded-lg border"
  >
    <div class="border-b px-4 py-3">
      <div class="text-sm font-medium">
        {{ name }}
      </div>
    </div>
    <div class="flex flex-1 items-start gap-2 p-4">
      <slot />
    </div>
  </div>
</template>
