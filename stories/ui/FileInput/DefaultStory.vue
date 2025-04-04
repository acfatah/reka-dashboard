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
    .any()
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
    class="w-full space-y-6 md:w-2/3"
    :validation-schema="formSchema"
    @submit="onSubmit"
  >
    <FormField v-slot="{ handleChange }" name="file">
      <FormItem>
        <FormLabel>Upload File</FormLabel>
        <FormControl>
          <Input
            type="file"
            @change="(event: Event) => event.target && handleChange((event.target as HTMLInputElement).files?.[0])"
          />
        </FormControl>
        <FormDescription>
          File upload field.
        </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>
    <Button type="submit">
      Submit
    </Button>
  </Form>
</template>
