<script setup lang="ts">
import type { ZodSchema } from 'zod'
import { toTypedSchema } from '@vee-validate/zod'
import { h, ref } from 'vue'
import { z } from 'zod'
import { toast } from '@/components/ui/toast'

interface Step {
  step: number
  title: string
  description: string
}

const formSchemas: ZodSchema[] = [
  z.object({
    fullName: z.string(),
    email: z.string().email(),
  }),

  z.object({
    password: z.string().min(2).max(50),
    confirmPassword: z.string(),
  }).refine(
    (values) => {
      return values.password === values.confirmPassword
    },
    {
      message: 'Passwords must match!',
      path: ['confirmPassword'],
    },
  ),

  z.object({
    favoriteDrink: z.union([z.literal('coffee'), z.literal('tea'), z.literal('soda')]),
  }),
]

const stepIndex = ref(1)
const steps: Step[] = [
  {
    step: 1,
    title: 'Your details',
    description: 'Provide your name and email',
  },
  {
    step: 2,
    title: 'Your password',
    description: 'Choose a password',
  },
  {
    step: 3,
    title: 'Your Favorite Drink',
    description: 'Choose a drink',
  },
]

type ZodSchemaStep1 = z.infer<typeof formSchemas[0]>
type ZodSchemaStep2 = z.infer<typeof formSchemas[1]>
type ZodSchemaStep3 = z.infer<typeof formSchemas[2]>
type FormValues = ZodSchemaStep1 & ZodSchemaStep2 & ZodSchemaStep3

function onSubmit(values: FormValues) {
  toast({
    title: 'You submitted the following values:',
    description: h('pre', { class: 'mt-2 w-full rounded-md bg-slate-950 p-4' }, h('code', { class: 'text-white' }, JSON.stringify(values, null, 2))),
  })
}
</script>

<template>
  <Form
    v-slot="{ meta, values, validate }"
    as=""
    keep-values
    :validation-schema="toTypedSchema(formSchemas[stepIndex - 1])"
  >
    <Stepper
      v-slot="{ isNextDisabled, isPrevDisabled, nextStep, prevStep }"
      v-model="stepIndex"
      class="block w-full"
    >
      <form
        @submit="(e) => {
          e.preventDefault()
          validate()

          if (stepIndex === steps.length && meta.valid) {
            onSubmit(values)
          }
        }"
      >
        <div class="flex w-full items-start gap-2">
          <StepperItem
            v-for="step in steps"
            :key="step.step"
            v-slot="{ state }"
            class="relative flex w-full flex-col items-center justify-center"
            :step="step.step"
          >
            <StepperSeparator
              v-if="step.step !== steps[steps.length - 1].step"
              class="absolute top-5 right-[calc(-50%+10px)] left-[calc(50%+20px)] block h-0.5 shrink-0 rounded-full bg-muted group-data-[state=completed]:bg-primary"
            />

            <StepperTrigger as-child>
              <Button
                :variant="state === 'completed' || state === 'active' ? 'default' : 'outline'"
                size="icon"
                class="z-10 shrink-0 rounded-full"
                :class="[state === 'active' && 'ring-2 ring-ring ring-offset-2 ring-offset-background']"
                :disabled="state !== 'completed' && !meta.valid"
              >
                <Icon v-if="state === 'completed'" icon="lucide:check" class="size-5" />
                <Icon v-if="state === 'active'" icon="lucide:circle" class="size-5" />
                <Icon v-if="state === 'inactive'" icon="lucide:dot" class="size-5" />
              </Button>
            </StepperTrigger>

            <div class="mt-5 flex flex-col items-center text-center">
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
        </div>

        <div class="mt-4 flex flex-col gap-4">
          <template v-if="stepIndex === 1">
            <FormField v-slot="{ componentField }" name="fullName">
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input type="text" v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>

            <FormField v-slot="{ componentField }" name="email">
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email " v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
          </template>

          <template v-if="stepIndex === 2">
            <FormField v-slot="{ componentField }" name="password">
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>

            <FormField v-slot="{ componentField }" name="confirmPassword">
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input type="password" v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
          </template>

          <template v-if="stepIndex === 3">
            <FormField v-slot="{ componentField }" name="favoriteDrink">
              <FormItem>
                <FormLabel>Drink</FormLabel>

                <Select v-bind="componentField">
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a drink" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="coffee">
                        Coffee
                      </SelectItem>
                      <SelectItem value="tea">
                        Tea
                      </SelectItem>
                      <SelectItem value="soda">
                        Soda
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            </FormField>
          </template>
        </div>

        <div class="mt-4 flex items-center justify-between">
          <Button
            :disabled="isPrevDisabled"
            variant="outline"
            size="sm"
            @click="prevStep()"
          >
            Back
          </Button>
          <div class="flex items-center gap-3">
            <Button
              v-if="stepIndex !== 3"
              :type="meta.valid ? 'button' : 'submit'"
              :disabled="isNextDisabled"
              size="sm"
              @click="meta.valid && nextStep()"
            >
              Next
            </Button>
            <Button
              v-if="stepIndex === 3" size="sm" type="submit"
            >
              Submit
            </Button>
          </div>
        </div>
      </form>
    </Stepper>
  </Form>
</template>
