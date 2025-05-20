<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'

const props = withDefaults(defineProps<{
  modelValue?: number
  size?: number
  thickness?: number
}>(), {
  modelValue: 0,
  size: 75,
  thickness: 8,
})

const front = ref<SVGElement | null>(null)
const center = computed(() => props.size / 2)
const radius = computed(() => props.size / 2 - props.thickness)
const dashArray = computed(() => 2 * Math.PI * radius.value)
const filledLength = computed(() => dashArray.value * (props.modelValue / 100))
const unfilledLength = computed(() => dashArray.value - filledLength.value)
</script>

<template>
  <div class="relative flex justify-center">
    <svg
      :width="props.size"
      :height="props.size"
      :viewBox="`0 0 ${props.size} ${props.size}`"
    >
      <g class="rotate-180 origin-center">
        <!-- progress-background -->
        <circle
          v-if="props.modelValue < 100"
          :cx="center"
          :cy="center"
          :r="radius"
          class="progress-background stroke-primary/20"
          fill="none"
        />
        <!-- progress-indicator -->
        <g class="duration-300 ease-in animate-in fade-in">
          <circle
            v-if="props.modelValue > 0"
            ref="front"
            :cx="center"
            :cy="center"
            :r="radius"
            :class="cn(
              'progress-indicator stroke-primary',
              'fill-foreward duration-300 ease-out animate-in',
            )"
            fill="none"
          />
        </g>
      </g>
      <foreignObject :width="props.size" :height="props.size">
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          class="flex h-full items-center justify-center"
        >
          <slot>
            <Label>{{ props.modelValue }}%</Label>
          </slot>
        </div>
      </foreignObject>
    </svg>
  </div>
</template>

<style scoped>
.progress-background {
  stroke-width: v-bind(thickness);
}

.progress-indicator {
  stroke-width: v-bind(thickness);
  stroke-linecap: round;
  stroke-dasharray: v-bind(filledLength) v-bind(unfilledLength);
}
</style>
