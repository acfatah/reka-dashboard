<script setup lang="ts">
import type { GenericObject, SubmissionHandler } from 'vee-validate'
import { Iconify } from '@/components/ui/icon'
import { toast } from '@/components/ui/toast'
import { toTypedSchema } from '@vee-validate/zod'
import { h } from 'vue'
import { z } from 'zod'

const schema = z.object({
  italic: z.boolean().optional(),
})
const formSchema = toTypedSchema(schema)

const initialValues = {
  italic: false,
}

const onSubmit: SubmissionHandler<GenericObject> = function (values) {
  const formValues = values as z.infer<typeof schema>

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
    <FormField v-slot="{ value, handleChange }" name="italic">
      <FormItem>
        <FormControl>
          <Toggle aria-label="Toggle italic" :model-value="value" @update:model-value="handleChange">
            <Iconify icon="lucide:italic" class="size-4" />
          </Toggle>
        </FormControl>
      </FormItem>
    </FormField>

    <Button type="submit">
      Submit
    </Button>
  </Form>
</template>
