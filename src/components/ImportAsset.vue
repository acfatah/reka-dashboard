<script setup lang="ts">
/**
 * Intended to auto-import files from the `/src/assets` directory.
 */

import { computed } from 'vue'

/**
 * - HTMLImageElement for images.
 * - HTMLAudioElement for audio files.
 * - HTMLVideoElement for video files.
 * - HTMLEmbedElement could potentially be used for embedding PDFs or other types of assets.
 * - HTMLObjectElement can also be used to embed various types of multimedia and data,
 *   including Flash content (though largely obsolete), images, audio, and video files.
 * - HTMLLinkElement for linking stylesheets (though not an asset used directly in
 *   the document body).
 * - HTMLScriptElement for linking to JavaScript files or embedding scripts directly,
 *   which might be considered as assets in some contexts.
 */
export type AssetElement = HTMLImageElement | HTMLAudioElement | HTMLVideoElement
  | HTMLEmbedElement | HTMLObjectElement | HTMLLinkElement | HTMLScriptElement

interface Module {
  default: string
  render: () => string
}

const props = defineProps<{
  /** E.g. `/icons/vue.svg` resolves to `/src/assets/icons/vue.svg`. */
  src: string
} & AssetElement>()

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
