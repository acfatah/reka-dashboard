<script setup lang="ts">
import type { GenericObject, SubmissionHandler } from 'vee-validate'
import { toast } from '@/components/ui/toast'
import { toTypedSchema } from '@vee-validate/zod'
import { h } from 'vue'
import { z } from 'zod'

type SubmissionRecord = z.infer<typeof schema>
const schema = z.object({
  marketing_emails: z.boolean().default(false).optional(),
  security_emails: z.boolean(),
})

const formSchema = toTypedSchema(schema)

const initialValues = {
  marketing_emails: false,
  security_emails: true,
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
    class="w-full space-y-6"
    :validation-schema="formSchema"
    :initial-values="initialValues"
    @submit="onSubmit"
  >
    <div class="space-y-4">
      <h3 class="mb-4 text-lg font-medium">
        Email Notifications
      </h3>

      <FormField v-slot="{ value, handleChange }" name="marketing_emails">
        <FormItem class="flex flex-row items-start space-x-3 space-y-0">
          <FormControl>
            <FormControl>
              <Switch
                :checked="value"
                @update:checked="handleChange"
              />
            </FormControl>
          </FormControl>

          <div class="flex w-full flex-col space-y-0.5">
            <FormLabel>Marketing emails</FormLabel>
            <FormDescription>
              Receive emails about new products, features, and more.
            </FormDescription>
            <FormMessage />
          </div>
        </FormItem>
      </FormField>

      <FormField v-slot="{ value, handleChange }" name="marketing_emails">
        <FormItem class="flex flex-row items-center justify-between rounded-lg border p-4">
          <div class="space-y-0.5">
            <FormLabel class="text-base">
              Marketing emails
            </FormLabel>
            <FormDescription>
              Receive emails about new products, features, and more.
            </FormDescription>
          </div>
          <FormControl>
            <Switch
              :checked="value"
              @update:checked="handleChange"
            />
          </FormControl>
        </FormItem>
      </FormField>

      <FormField v-slot="{ value, handleChange }" name="security_emails">
        <FormItem class="flex flex-row items-center justify-between rounded-lg border p-4">
          <div class="space-y-0.5">
            <FormLabel class="text-base">
              Security emails
            </FormLabel>
            <FormDescription>
              Receive emails about your account security.
            </FormDescription>
          </div>
          <FormControl>
            <Switch
              :checked="value"
              disabled
              aria-readonly
              @update:checked="handleChange"
            />
          </FormControl>
        </FormItem>
      </FormField>

      <!-- Other fields -->
    </div>

    <Button type="submit">
      Submit
    </Button>
  </Form>
</template>
