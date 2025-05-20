<script setup lang="ts">
import type { VNode } from 'vue'
import { h } from 'vue'
import { Icon } from '@/components/ui/icon'

interface Step {
  step: number
  title: string
  description: string
  icon?: VNode
}

const steps: Step[] = [
  {
    step: 1,
    title: 'Address',
    description: 'Add your address here',
    icon: h(Icon, { icon: 'lucide:book-user', class: 'size-4' }),
  },
  {
    step: 2,
    title: 'Shipping',
    description: 'Set your preferred shipping method',
    icon: h(Icon, { icon: 'lucide:truck', class: 'size-4' }),
  },
  {
    step: 3,
    title: 'Payment',
    description: 'Add any payment information you have',
    icon: h(Icon, { icon: 'lucide:credit-card', class: 'size-4' }),
  },
  {
    step: 4,
    title: 'Checkout',
    description: 'Confirm your order',
    icon: h(Icon, { icon: 'lucide:check', class: 'size-4' }),
  },
]
</script>

<template>
  <Stepper>
    <StepperItem
      v-for="item in steps"
      :key="item.step"
      class="basis-1/4"
      :step="item.step"
    >
      <StepperTrigger>
        <StepperIndicator>
          <component :is="item.icon" class="size-4" />
        </StepperIndicator>
        <div class="flex flex-col">
          <StepperTitle>
            {{ item.title }}
          </StepperTitle>
          <StepperDescription>
            {{ item.description }}
          </StepperDescription>
        </div>
      </StepperTrigger>
      <StepperSeparator
        v-if="item.step !== steps[steps.length - 1].step"
        class="h-px w-full"
      />
    </StepperItem>
  </Stepper>
</template>
