<script setup lang="ts">
import type { GenericObject, SubmissionHandler } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'
import { toast } from '@/components/ui/toast'

type NotificationRecord = z.infer<typeof schema>
const schema = z.object({
  type: z.enum(['all', 'mentions', 'none'], {
    required_error: 'You need to select a notification type.',
  }),

  mobile: z
    .boolean()
    .default(false)
    .optional(),

  communication_emails: z
    .boolean()
    .default(false)
    .optional(),

  social_emails: z
    .boolean()
    .default(false)
    .optional(),

  marketing_emails: z
    .boolean()
    .default(false)
    .optional(),

  security_emails: z.boolean(),
})

const notificationsFormSchema = toTypedSchema(schema)

const initialValues = {
  type: 'all',
  mobile: false,
  communication_emails: false,
  social_emails: true,
  marketing_emails: false,
  security_emails: true,
}

const onSubmit: SubmissionHandler<GenericObject> = function (values) {
  const formValues = values as NotificationRecord

  toast({
    title: 'You submitted the following values:',
    description: h('pre', { class: 'mt-2 w-full rounded-md bg-slate-950 p-4' }, h('code', { class: 'text-white' }, JSON.stringify(formValues, null, 2))),
  })
}
</script>

<template>
  <div>
    <h3 class="text-lg font-medium">
      Notifications
    </h3>
    <p class="text-sm text-muted-foreground">
      Configure how you receive notifications.
    </p>
  </div>
  <Separator />
  <Form
    v-slot="{ meta }"
    :initial-values="initialValues"
    :validation-schema="notificationsFormSchema"
    class="space-y-8"
    @submit="onSubmit"
  >
    <FormField v-slot="{ componentField }" type="radio" name="type">
      <FormItem class="space-y-3">
        <FormLabel>Notify me about...</FormLabel>
        <FormControl>
          <RadioGroup v-bind="componentField">
            <FormItem class="flex items-center space-x-3 space-y-0">
              <FormControl>
                <RadioGroupItem value="all" />
              </FormControl>
              <FormLabel class="font-normal">
                All new messages
              </FormLabel>
            </FormItem>
            <FormItem class="flex items-center space-x-3 space-y-0">
              <FormControl>
                <RadioGroupItem value="mentions" />
              </FormControl>
              <FormLabel class="font-normal">
                Direct messages and mentions
              </FormLabel>
            </FormItem>
            <FormItem class="flex items-center space-x-3 space-y-0">
              <FormControl>
                <RadioGroupItem value="none" />
              </FormControl>
              <FormLabel class="font-normal">
                Nothing
              </FormLabel>
            </FormItem>
          </RadioGroup>
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>

    <div>
      <h3 class="mb-4 text-lg font-medium">
        Email Notifications
      </h3>
      <div class="space-y-4">
        <FormField v-slot="{ handleChange, value }" type="checkbox" name="communication_emails">
          <FormItem class="flex flex-row items-center justify-between rounded-lg border p-4">
            <div class="space-y-0.5">
              <FormLabel class="text-base">
                Communication emails
              </FormLabel>
              <FormDescription>
                Receive emails about your account activity.
              </FormDescription>
            </div>
            <FormControl>
              <Switch
                :model-value="value"
                @update:model-value="handleChange"
              />
            </FormControl>
          </FormItem>
        </FormField>

        <FormField v-slot="{ handleChange, value }" type="checkbox" name="marketing_emails">
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
                :model-value="value"
                @update:model-value="handleChange"
              />
            </FormControl>
          </FormItem>
        </FormField>

        <FormField v-slot="{ handleChange, value }" type="checkbox" name="social_emails">
          <FormItem class="flex flex-row items-center justify-between rounded-lg border p-4">
            <div class="space-y-0.5">
              <FormLabel class="text-base">
                Social emails
              </FormLabel>
              <FormDescription>
                Receive emails for friend requests, follows, and more.
              </FormDescription>
            </div>
            <FormControl>
              <Switch
                :model-value="value"
                @update:model-value="handleChange"
              />
            </FormControl>
          </FormItem>
        </FormField>

        <FormField v-slot="{ handleChange, value }" type="checkbox" name="security_emails">
          <FormItem class="flex flex-row items-center justify-between rounded-lg border p-4">
            <div class="space-y-0.5">
              <FormLabel class="text-base">
                Security emails
              </FormLabel>
              <FormDescription>
                Receive emails about your account activity and security.
              </FormDescription>
            </div>
            <FormControl>
              <Switch
                :model-value="value"
                @update:model-value="handleChange"
              />
            </FormControl>
          </FormItem>
        </FormField>
      </div>
    </div>

    <FormField v-slot="{ handleChange, value }" type="checkbox" name="mobile">
      <FormItem class="flex flex-row items-start space-x-3 space-y-0">
        <FormControl>
          <Checkbox
            :model-value="value"
            @update:model-value="handleChange"
          />
        </FormControl>
        <div class="space-y-1 leading-none">
          <FormLabel>
            Use different settings for my mobile devices
          </FormLabel>
          <FormDescription>
            You can manage your mobile notifications in the
            <a href="/examples/Forms">
              mobile settings
            </a> page.
          </FormDescription>
        </div>
      </FormItem>
    </FormField>

    <div class="flex justify-start">
      <Button
        type="submit"
        :disabled="!(meta.dirty && meta.valid)"
      >
        Update notifications
      </Button>
    </div>
  </Form>
</template>
