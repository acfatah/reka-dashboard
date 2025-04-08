<script setup lang="ts">
import type { GenericObject, SubmissionHandler } from 'vee-validate'
import { toast } from '@/components/ui/toast'
import { toTypedSchema } from '@vee-validate/zod'
import { h } from 'vue'
import { z } from 'zod'

type SubmissionRecord = z.infer<typeof schema>
const schema = z.object({
  payment: z
    .number()
    .min(10, 'Min 10 euros to send payment')
    .max(5000, 'Max 5000 euros to send payment'),
})

const formSchema = toTypedSchema(schema)

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
    v-slot="{ meta, setFieldValue }"
    class="w-full space-y-6"
    :validation-schema="formSchema"
    :initial-values="{ payment: 10 }"
    @submit="onSubmit"
  >
    <FormField v-slot="{ value }" name="payment">
      <FormItem>
        <FormLabel>Payment</FormLabel>
        <NumberField
          class="w-40 gap-2"
          :min="0"
          :format-options="{
            style: 'currency',
            currency: 'EUR',
            currencyDisplay: 'code',
            currencySign: 'accounting',
          }"
          :model-value="value"
          @update:model-value="(v) => {
            if (v) {
              setFieldValue('payment', v)
            }
            else {
              setFieldValue('payment', undefined)
            }
          }"
        >
          <NumberFieldContent>
            <NumberFieldDecrement />
            <FormControl>
              <NumberFieldInput />
            </FormControl>
            <NumberFieldIncrement />
          </NumberFieldContent>
        </NumberField>
        <FormDescription>
          Enter value between 10 and 5000.
        </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>

    <Button
      type="submit"
      :disabled="!(meta.dirty && meta.valid)"
    >
      Submit
    </Button>
  </Form>
</template>
