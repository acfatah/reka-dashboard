<script setup lang="ts">
/**
 * Intended to auto-import files from the `/src/assets` directory.
 */

import { computed } from 'vue'

interface Module {
  default: string
  render: () => string
}

const props = defineProps<{
  /** E.g. `/icons/vue.svg` resolves to `/src/assets/icons/vue.svg`. */
  src: string
}>()

const delegatedAttrs = computed(() => {
  const { src, ...delegated } = useAttrs()

  return delegated
})

function getFileName(src: string) {
  try {
    // Use import.meta.glob to load all files from the directory
    const assetFiles: Record<string, Module> = import.meta.glob('/src/assets/**/*', { eager: true })
    const moduleKeys = Object.keys(assetFiles)
    const fileSrc = moduleKeys.find(key => key === `/src/assets/${src.replace(/^\//, '')}`)

    return fileSrc ? assetFiles[fileSrc]?.default : src
  }
  catch (err) {
    console.error(err)
  }

  return src
}
</script>

<template>
  <div>
    <component :is="getFileName(props.src)" v-bind="delegatedAttrs" />
  </div>
</template>
