<script setup lang="ts">
import { VisDonut, VisSingleContainer } from '@unovis/vue'
import { computed, watchEffect } from 'vue'

const props = withDefaults(
  defineProps<{
    /** Value in percentage */
    modelValue?: number

    /** Size in pixels */
    size?: number

    thickness?: number
    offset?: number
    cornerRadius?: number
    hideLabel?: boolean
    hideSubLabel?: boolean
    progressText?: string
    completeText?: string
  }>(),
  {
    modelValue: 0,
    size: 75,
    thickness: 8,
    offset: () => 1.5 * Math.PI,
    cornerRadius: 5,
    hideLabel: false,
    hideSubLabel: false,
    progressText: '',
    completeText: 'Complete',
  },
)

const end = computed(() => props.offset + (props.modelValue / 100) * 2 * Math.PI)

const label = computed(() => {
  if (props.hideLabel || props.size < 70)
    return ''

  return `${props.modelValue}%`
})

const subLabel = computed(() => {
  if (props.hideSubLabel || props.size < 80)
    return ''

  return props.modelValue === 100 ? props.completeText : props.progressText
})

function validateModelValue(value: number) {
  if (value < 0 || value > 100) {
    console.warn('modelValue is out of range. It must be between 0 and 100.')
  }
}

watchEffect(() => {
  validateModelValue(props.modelValue)
})
</script>

<template>
  <VisSingleContainer :height="props.size">
    <VisDonut
      :value="(datum: any) => datum.value"
      :data="[{ key: 'progress', value: props.modelValue }]"
      :central-label="label"
      :central-sub-label="subLabel"
      :show-empty-segments="true"
      :pad-angle="0"
      :arc-width="props.thickness"
      :corner-radius="props.cornerRadius"
      :color="(_: any, i: number) => ['--primary', '--background'][i]"
      :angle-range="[props.offset, end]"
      :show-background="true"
      :background-angle-range="[0, 2 * Math.PI]"
    />
  </VisSingleContainer>
</template>
