<script setup lang="ts">
import { useStorage } from '@vueuse/core'

// See src/styles/themes.css
const THEMES = [
  {
    name: 'Default',
    value: 'default',
  },
  {
    name: 'Neutral',
    value: 'neutral',
  },
  {
    name: 'Stone',
    value: 'stone',
  },
  {
    name: 'Zinc',
    value: 'zinc',
  },
  {
    name: 'Gray',
    value: 'gray',
  },
  {
    name: 'Slate',
    value: 'slate',
  },
  {
    name: 'Scaled',
    value: 'scaled',
  },
]

const activeTheme = useStorage('theme', 'default')

// Initialize the color mode based on user preference
watchEffect(() => {
  if (activeTheme.value)
    setActiveThemeByName(activeTheme.value)
})

function setActiveThemeByName(name: string) {
  activeTheme.value = name

  Array
    .from(document.body.classList)
    .filter(className => className.startsWith('theme-'))
    .forEach((className) => {
      document.body.classList.remove(className)
    })

  document.body.classList.add(`theme-${name}`)

  if (activeTheme.value.endsWith('-scaled')) {
    document.body.classList.add('theme-scaled')
  }
}
</script>

<template>
  <Select
    :model-value="activeTheme"
    @update:model-value="setActiveThemeByName($event as string)"
  >
    <SelectTrigger size="sm" class="w-32">
      <SelectValue placeholder="Select a theme" />
    </SelectTrigger>
    <SelectContent align="end">
      <template v-for="{ name, value } in THEMES" :key="name">
        <SelectItem :value="value">
          {{ name }}
        </SelectItem>
      </template>
    </SelectContent>
  </Select>
</template>
