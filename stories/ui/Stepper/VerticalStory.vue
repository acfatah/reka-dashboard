<script setup lang="ts">
interface Step {
  step: number
  title: string
  description: string
}

const steps: Step[] = [
  {
    step: 1,
    title: 'Your details',
    description:
        'Provide your name and email address. We will use this information to create your account',
  },
  {
    step: 2,
    title: 'Company details',
    description: 'A few details about your company will help us personalize your experience',
  },
  {
    step: 3,
    title: 'Invite your team',
    description:
        'Start collaborating with your team by inviting them to join your account. You can skip this step and invite them later',
  },
]
</script>

<template>
  <Stepper orientation="vertical" class="mx-auto flex w-full max-w-md flex-col justify-start gap-10">
    <StepperItem
      v-for="step in steps"
      :key="step.step"
      v-slot="{ state }"
      class="relative flex w-full items-start gap-6"
      :step="step.step"
    >
      <StepperSeparator
        v-if="step.step !== steps[steps.length - 1].step"
        class="absolute left-[18px] top-[38px] block h-[105%] w-0.5 shrink-0 rounded-full bg-muted group-data-[state=completed]:bg-primary"
      />

      <StepperTrigger as-child>
        <Button
          :variant="state === 'completed' || state === 'active' ? 'default' : 'outline'"
          size="icon"
          class="z-10 shrink-0 rounded-full"
          :class="[state === 'active' && 'ring-2 ring-ring ring-offset-2 ring-offset-background']"
        >
          <!-- <CheckIcon v-if="state === 'completed'" class="size-5" />
          <CircleIcon v-if="state === 'active'" />
          <DotIcon v-if="state === 'inactive'" /> -->
          <Icon v-if="state === 'completed'" icon="lucide:check" class="size-5" />
          <Icon v-if="state === 'active'" icon="lucide:circle" class="size-5" />
          <Icon v-if="state === 'inactive'" icon="lucide:dot" class="size-5" />
        </Button>
      </StepperTrigger>

      <div class="flex flex-col gap-1">
        <StepperTitle
          :class="[state === 'active' && 'text-primary']"
          class="text-sm font-semibold transition lg:text-base"
        >
          {{ step.title }}
        </StepperTitle>
        <StepperDescription
          :class="[state === 'active' && 'text-primary']"
          class="sr-only text-xs text-muted-foreground transition md:not-sr-only lg:text-sm"
        >
          {{ step.description }}
        </StepperDescription>
      </div>
    </StepperItem>
  </Stepper>
</template>
