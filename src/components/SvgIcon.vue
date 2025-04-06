<script setup lang="ts">
const props = withDefaults(defineProps<{
  name: string

  /** Size prop will override width and height */
  size?: string | number
}>(), {
  size: 24,
})

const iconFound = ref(true)
const { name: nameAttr, size: sizeAttr, ...delegatedAttrs } = useAttrs()

const SvgIcon = defineAsyncComponent(async () => {
  try {
    return await import(`@/assets/icons/${props.name}.svg?component`)
  }
  catch (error) {
    if (
      error instanceof Error
      && error.message.match(/^Unknown variable dynamic import: (.*)/)
    ) {
      iconFound.value = false
      console.error(`Icon ${props.name}.svg not found`)
    }

    throw error
  }
})
</script>

<template>
  <SvgIcon
    v-if="props.name && iconFound"
    v-bind="{
      ...delegatedAttrs,
      ...(props.size ? { width: props.size, height: props.size } : {}),
    }"
  />
</template>
