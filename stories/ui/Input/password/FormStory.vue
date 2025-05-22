<script setup lang="ts">
import type { GenericObject, SubmissionHandler } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { h } from 'vue'
import { z } from 'zod'
import { toast } from '@/components/ui/toast'

type SubmissionRecord = z.infer<typeof schema>
const schema = z.object({
  password: z
    .string()
    .min(4, {
      message: 'Password must be at least 4 characters.',
    }),
})

const formSchema = toTypedSchema(schema)

const onSubmit: SubmissionHandler<GenericObject> = function (values) {
  const formValues = values as SubmissionRecord

  toast({
    title: 'You submitted the following values:',
    description: h(
      'pre',
      { class: 'mt-2 w-full rounded-md bg-slate-950 p-4' },
      h('code', { class: 'text-white' }, JSON.stringify(formValues, null, 2)),
    ),
  })
}
</script>

<template>
  <Form
    v-slot="{ meta }"
    class="flex flex-col w-full space-y-6 sm:w-2/3"
    :validation-schema="formSchema"
    @submit="onSubmit"
  >
    <FormField v-slot="{ componentField }" name="password">
      <FormItem>
        <FormLabel>Password</FormLabel>
        <FormControl>
          <PasswordInput v-bind="componentField" placeholder="Enter password" />
        </FormControl>
        <FormDescription>
          You login password
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
