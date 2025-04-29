<script setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <Button
    variant="outline"
    class="group/toggle"
    size="icon"
    @click="toggleDark()"
  >
    <Iconify v-show="isDark" icon="lucide:sun" class="size-4" />
    <Iconify v-show="!isDark" icon="lucide:moon" class="size-4" />
    <span class="sr-only">Toggle theme</span>
  </Button>
</template>
