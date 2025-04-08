<script setup lang="ts">
import type { GenericObject, SubmissionHandler } from 'vee-validate'
import { toast } from '@/components/ui/toast'
import { toTypedSchema } from '@vee-validate/zod'
import { h, useAttrs } from 'vue'
import { z } from 'zod'

type SubmissionRecord = z.infer<typeof schema>
const schema = z.object({
  selection: z.string().array().optional(),
})

const formSchema = toTypedSchema(schema)

const initialValues = {
  selection: ['button-1'],
}

const onSubmit: SubmissionHandler<GenericObject> = function (values) {
  const formvalues = values as SubmissionRecord

  toast({
    title: 'You submitted the following values:',
    description: h(
      'pre',
      { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' },
      h('code', { class: 'text-white' }, JSON.stringify(formvalues, null, 2)),
    ),
  })
}

// TODO: Remove the story args
const storyArgs = useAttrs()
</script>

<template>
  <Form
    v-slot="{ meta }"
    class="w-full space-y-6"
    :validation-schema="formSchema"
    :initial-values="initialValues"
    @submit="onSubmit"
  >
    <FormField v-slot="{ value, handleChange }" name="selection">
      <FormItem>
        <FormControl>
          <ButtonGroup
            :model-value="value"
            type="multiple"
            v-bind="storyArgs"
            @update:model-value="handleChange"
          >
            <ButtonGroupItem value="button-1" aria-label="Button 1">
              Button 1
            </ButtonGroupItem>
            <ButtonGroupItem value="button-2" aria-label="Button 2">
              Button 2
            </ButtonGroupItem>
            <ButtonGroupItem value="button-3" aria-label="Button 3">
              Button 3
            </ButtonGroupItem>
          </ButtonGroup>
        </FormControl>
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
