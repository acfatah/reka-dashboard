<script setup lang="ts">
import type { GenericObject, SubmissionHandler } from 'vee-validate'
import { toast } from '@/components/ui/toast'
import { toTypedSchema } from '@vee-validate/zod'
import { h } from 'vue'
import { z } from 'zod'

const validMimeTypes = [
  'image/jpeg',
  'image/jpg',
  'image/png',
]

type SubmissionRecord = z.infer<typeof schema>
const schema = z.object({
  file: z
    .union([z.instanceof(File), z.undefined()])
    .refine(file => file !== undefined, {
      // Custom message for when the file is not provided
      message: 'Please select a file',
    })
    .refine(file => validMimeTypes.includes(file?.type), {
      message: 'Invalid file type. Only JPG, JPEG and PNG are allowed.',
    })
    // Example of using file extension validation
    // .refine(file => ['jpg', 'jpeg', 'png'].includes(file?.name.split('.').pop()), {
    //   message: 'Invalid file type. Only JPG, JPEG and PNG are allowed.',
    // })
    .refine(file => file?.size <= 1024 * 1024 * 5, {
      // Example: 5MB max file size
      message: 'File size too large. The maximum size allowed is 5MB.',
    }),
})

const formSchema = toTypedSchema(schema)

const onSubmit: SubmissionHandler<GenericObject> = function (values) {
  const formValues = values as SubmissionRecord
  const formData = new FormData()

  formData.append('file', formValues.file)

  // Example of file upload
  // eslint-disable-next-line no-console
  console.log(formData.getAll('file'))

  toast({
    title: 'You submitted the following values:',
    description: h(
      'pre',
      { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' },
      h('code', { class: 'text-white' }, 'Check the dev console...'),
    ),
  })
}

// TODO: remove the story args
const storyArgs = useAttrs()
</script>

<template>
  <Form
    v-slot="{ meta }"
    class="w-full space-y-6 md:w-2/3"
    :validation-schema="formSchema"
    @submit="onSubmit"
  >
    <FormField
      v-slot="{ componentField }"
      :validate-on-blur="false"
      name="file"
    >
      <FormItem>
        <FormLabel>Upload File</FormLabel>
        <FormControl>
          <FileInput v-bind="{ ...componentField, ...storyArgs }" />
        </FormControl>
        <FormDescription>
          File upload field.
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
