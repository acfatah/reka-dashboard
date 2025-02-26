<script setup lang="ts">
import { UseDark } from '@vueuse/components'
</script>

<template>
  <UseDark v-slot="{ isDark, toggleDark }">
    <button class="px-2" variant="outline" size="icon" @click="toggleDark()">
      <span>{{ isDark ? 'Dark' : 'Light' }}</span>
    </button>
  </UseDark>
</template>
