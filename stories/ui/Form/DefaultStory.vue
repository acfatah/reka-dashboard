<script setup lang="ts">
import type { GenericObject, SubmissionHandler } from 'vee-validate'
import { toast } from '@/components/ui/toast'
import { toTypedSchema } from '@vee-validate/zod'
import { h } from 'vue'
import { z } from 'zod'

interface ItemRecord {
  id: string
  label: string
}

const items: ItemRecord[] = [
  { id: 'recents', label: 'Recents' },
  { id: 'home', label: 'Home' },
  { id: 'applications', label: 'Applications' },
  { id: 'desktop', label: 'Desktop' },
  { id: 'downloads', label: 'Downloads' },
  { id: 'documents', label: 'Documents' },
]

const schema = z.object({
  username: z.string().min(6),

  bio: z
    .string()
    .min(10, {
      message: 'Bio must be at least 10 characters.',
    })
    .max(160, {
      message: 'Bio must not be longer than 30 characters.',
    }),

  mobile: z.boolean(),

  items: z
    .array(z.string())
    .refine(value => value.some(item => item), {
      message: 'You have to select at least one item.',
    }),

  subscription: z.boolean().default(false).optional(),

  subscriptionType: z.enum(['all', 'mentions', 'none'], {
    required_error: 'You need to select a notification type.',
  }),
})

const formSchema = toTypedSchema(schema)

const initialValues = {
  mobile: false,
  items: ['recents', 'home'],
  subscription: false,
}

const onSubmit: SubmissionHandler<GenericObject> = function (values) {
  const formValues = values as ItemRecord

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
    v-slot="{ meta }"
    class="flex w-full flex-col space-y-6 md:w-3/4 lg:3/4"
    :validation-schema="formSchema"
    :initial-values="initialValues"
    :disabled="true"
    @submit="onSubmit"
  >
    <div>
      <h3 class="mb-4 text-lg font-medium">
        Email Notifications
      </h3>

      <!-- Text Input -->
      <div class="flex w-full flex-col space-y-6 md:w-3/4 lg:3/4">
        <FormField v-slot="{ componentField }" name="username">
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input type="text" placeholder="username" v-bind="componentField" />
            </FormControl>
            <FormDescription>
              This is your public display name.
            </FormDescription>
            <FormMessage />
          </FormItem>
        </FormField>

        <!-- Textarea -->
        <FormField v-slot="{ componentField }" name="bio">
          <FormItem>
            <FormLabel>Bio</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Tell us a little bit about yourself"
                class="resize-none"
                v-bind="componentField"
              />
            </FormControl>
            <FormDescription>
              You can <span>@mention</span> other users and organizations.
            </FormDescription>
            <FormMessage />
          </FormItem>
        </FormField>

        <!-- Checkbox -->
        <FormField v-slot="{ value, handleChange }" type="checkbox" name="mobile">
          <FormItem class="flex flex-row items-start space-x-3 space-y-0">
            <FormControl>
              <Checkbox :model-value="value" @update:model-value="handleChange" />
            </FormControl>
            <div class="flex w-full flex-col space-y-1 leading-none">
              <FormLabel>Use different settings for my mobile devices</FormLabel>
              <FormDescription>
                You can manage your mobile notifications in the
                <a
                  href="/examples/forms"
                  class="underline-offset-4 text-primary hover:underline"
                >mobile settings</a> page.
              </FormDescription>
              <FormMessage />
            </div>
          </FormItem>
        </FormField>

        <!-- Switch -->
        <FormField v-slot="{ value, handleChange }" name="subscription">
          <FormItem class="flex flex-row items-start space-x-3 space-y-0">
            <FormControl>
              <FormControl>
                <Switch
                  :model-value="value"
                  @update:model-value="handleChange"
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

        <!-- Checkbox with array values -->
        <FormField name="items">
          <FormItem>
            <div class="mb-4">
              <FormLabel>Sidebar</FormLabel>
              <FormDescription>
                Select the items you want to display in the sidebar.
              </FormDescription>
            </div>

            <FormField
              v-for="item in items" v-slot="{ value, handleChange }"
              :key="item.id"
              type="checkbox"
              :value="item.id"
              :unchecked-value="false"
              name="items"
            >
              <FormItem class="flex flex-row items-start space-x-2 space-y-0">
                <FormControl>
                  <Checkbox
                    :model-value="value.includes(item.id)"
                    @update:model-value="handleChange"
                  />
                </FormControl>
                <FormLabel class="font-normal">
                  {{ item.label }}
                </FormLabel>
              </FormItem>
            </FormField>
            <FormMessage />
          </FormItem>
        </FormField>

        <!-- Radio with array values -->
        <FormField v-slot="{ componentField }" type="radio" name="subscriptionType">
          <FormItem class="flex flex-col">
            <div class="mb-4">
              <FormLabel>Notify me about...</FormLabel>
              <FormDescription>
                Select the items you want to be notified about.
              </FormDescription>
            </div>

            <FormControl>
              <RadioGroup v-bind="componentField">
                <FormItem class="flex flex-row space-y-1 space-x-2">
                  <FormControl>
                    <RadioGroupItem value="all" />
                  </FormControl>
                  <FormLabel class="font-normal">
                    All new messages
                  </FormLabel>
                </FormItem>
                <FormItem class="flex flex-row space-y-1 space-x-2">
                  <FormControl>
                    <RadioGroupItem value="mentions" />
                  </FormControl>
                  <FormLabel class="font-normal">
                    Direct messages and mentions
                  </FormLabel>
                </FormItem>
                <FormItem class="flex flex-row space-y-1 space-x-2">
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

        <!-- Other fields -->
      </div>
    </div>

    <Button
      type="submit"
      :disabled="!(meta.dirty && meta.valid)"
    >
      Submit
    </Button>
  </Form>
</template>
