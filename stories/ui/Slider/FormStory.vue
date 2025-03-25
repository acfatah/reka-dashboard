<script setup lang="ts">
import type { GenericObject, SubmissionHandler } from 'vee-validate'
import { toast } from '@/components/ui/toast'
import { toTypedSchema } from '@vee-validate/zod'
import { h } from 'vue'
import { z } from 'zod'

type SubmissionRecord = z.infer<typeof schema>
const schema = z.object({
  duration: z.array(
    z.number().min(0).max(60),
  ),
})

const formSchema = toTypedSchema(schema)

const initialValues = {
  duration: [30],
}

const onSubmit: SubmissionHandler<GenericObject> = function (values) {
  const formValues = values as SubmissionRecord

  toast({
    title: 'You submitted the following values:',
    description: h(
      'pre',
      { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' },
      h('code', { class: 'text-white' }, JSON.stringify(formValues, null, 2)),
    ),
  })
}
</script>

<template>
  <Form
    :validation-schema="formSchema"
    :initial-values="initialValues"
    class="w-2/3 space-y-6"
    @submit="onSubmit"
  >
    <FormField v-slot="{ componentField, value }" name="duration">
      <FormItem>
        <FormLabel>Duration</FormLabel>
        <FormControl>
          <Slider
            :model-value="componentField.modelValue"
            :default-value="[30]"
            :max="100"
            :min="0"
            :step="5"
            :name="componentField.name"
            @update:model-value="componentField['onUpdate:modelValue']"
          />
          <FormDescription class="flex justify-between">
            <span>How many minutes are you available?</span>
            <span>{{ value?.[0] }} min</span>
          </FormDescription>
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>

    <Button type="submit">
      Submit
    </Button>
  </Form>
</template>
