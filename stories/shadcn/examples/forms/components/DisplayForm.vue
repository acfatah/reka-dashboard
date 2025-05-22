<script setup lang="ts">
import type { GenericObject, SubmissionHandler } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'
import { toast } from '@/components/ui/toast'

interface DisplayRecord {
  id: string
  label: string
}

const items: DisplayRecord[] = [
  {
    id: 'recents',
    label: 'Recents',
  },
  {
    id: 'home',
    label: 'Home',
  },
  {
    id: 'applications',
    label: 'Applications',

  },
  {
    id: 'desktop',
    label: 'Desktop',

  },
  {
    id: 'downloads',
    label: 'Downloads',

  },
  {
    id: 'documents',
    label: 'Documents',

  },
]

const schema = z.object({
  items: z
    .array(z.string())
    .refine(value => value.some(item => item), {
      message: 'You have to select at least one item.',
    }),
})

const displayFormSchema = toTypedSchema(schema)

const initialValues = {
  items: [],
}

const onSubmit: SubmissionHandler<GenericObject> = function (values) {
  const formValues = values as DisplayRecord

  toast({
    title: 'You submitted the following values:',
    description: h('pre', { class: 'mt-2 w-full rounded-md bg-slate-950 p-4' }, h('code', { class: 'text-white' }, JSON.stringify(formValues, null, 2))),
  })
}
</script>

<template>
  <div>
    <h3 class="text-lg font-medium">
      Display
    </h3>
    <p class="text-sm text-muted-foreground">
      Turn items on or off to control what's displayed in the app.
    </p>
  </div>
  <Separator />
  <Form
    v-slot="{ meta }"
    :validation-schema="displayFormSchema"
    :initial-values="initialValues"
    @submit="onSubmit"
  >
    <FormField name="items">
      <FormItem>
        <div class="mb-4">
          <FormLabel class="text-base">
            Sidebar
          </FormLabel>
          <FormDescription>
            Select the items you want to display in the sidebar.
          </FormDescription>
        </div>

        <FormField
          v-for="item in items"
          v-slot="{ value, handleChange }"
          :key="item.id"
          :value="item.id"
          :unchecked-value="false"
          type="checkbox"
          name="items"
        >
          <FormItem class="flex flex-row items-start space-x-3 space-y-0">
            <FormControl>
              <Checkbox
                :model-value="value?.includes(item.id)"
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

    <div class="mt-4 flex justify-start">
      <Button
        type="submit"
        :disabled="!(meta.dirty && meta.valid)"
      >
        Update display
      </Button>
    </div>
  </Form>
</template>
