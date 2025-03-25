<script setup lang="ts">
import type { GenericObject, SubmissionHandler } from 'vee-validate'
import { toast } from '@/components/ui/toast'
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'

type SubmissionRecord = z.infer<typeof schema>
const schema = z.object({
  pin: z
    .array(z.coerce.string())
    .length(5, { message: 'Invalid input' })
    .transform(value => value.join('')),
})

const formSchema = toTypedSchema(schema)

const onSubmit: SubmissionHandler<GenericObject> = function (values) {
  const formValues = values as SubmissionRecord

  toast({
    title: 'You submitted the following values:',
    description: h('pre', { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' }, h(
      'code',
      { class: 'text-white' },
      JSON.stringify(formValues, null, 2),
    )),
  })
}

// TODO: Remove the story args
const storyArgs = useAttrs()
</script>

<template>
  <Form
    v-slot="{ setFieldValue }"
    class="mx-auto w-2/3 space-y-6"
    :validation-schema="formSchema"
    @submit="onSubmit"
  >
    <FormField v-slot="{ componentField, value }" name="pin">
      <FormItem>
        <FormLabel>OTP</FormLabel>
        <FormControl>
          <PinInput
            v-bind="storyArgs"
            id="pin-input"
            :model-value="value"
            placeholder="○"
            class="mt-1 flex items-center gap-2"
            otp
            type="number"
            :name="componentField.name"
            @update:model-value="(arrStr) => {
              setFieldValue('pin', arrStr.filter(Boolean))
            }"
          >
            <PinInputGroup>
              <PinInputInput
                v-for="(id, index) in 5"
                :key="id"
                :index="index"
              />
            </PinInputGroup>
          </PinInput>
        </FormControl>
        <FormDescription>
          Allows users to input a sequence of one-character alphanumeric inputs.
        </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>

    <Button>Submit</Button>
  </Form>
</template>
