<script setup lang="ts">
import type { GenericObject, SubmissionHandler } from 'vee-validate'
import { toast } from '@/components/ui/toast'
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'

interface LanguageRecord {
  label: string
  value: string
}

const languages: LanguageRecord[] = [
  { label: 'English', value: 'en' },
  { label: 'French', value: 'fr' },
  { label: 'German', value: 'de' },
  { label: 'Spanish', value: 'es' },
  { label: 'Portuguese', value: 'pt' },
  { label: 'Russian', value: 'ru' },
  { label: 'Japanese', value: 'ja' },
  { label: 'Korean', value: 'ko' },
  { label: 'Chinese', value: 'zh' },
]

const schema = z.object({
  language: z.string({
    required_error: 'Please select a language.',
  }),
})

const formSchema = toTypedSchema(schema)

const initialValues = {
  language: '',
}

const onSubmit: SubmissionHandler<GenericObject> = function (values) {
  const formValues = values as LanguageRecord

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
    v-slot="{ meta, setFieldValue }"
    class="space-y-6"
    :validation-schema="formSchema"
    :initial-values="initialValues"
    @submit="onSubmit"
  >
    <FormField name="language">
      <FormItem class="flex flex-col">
        <FormLabel>Language</FormLabel>

        <Combobox by="label">
          <FormControl>
            <ComboboxAnchor>
              <div class="relative w-full max-w-sm items-center">
                <ComboboxInput :display-value="(val) => val?.label ?? ''" placeholder="Select framework..." />
                <ComboboxTrigger class="absolute end-0 inset-y-0 flex items-center justify-center px-3">
                  <ChevronsUpDown class="size-4 text-muted-foreground" />
                </ComboboxTrigger>
              </div>
            </ComboboxAnchor>
          </FormControl>

          <ComboboxList>
            <ComboboxEmpty>
              Nothing found.
            </ComboboxEmpty>

            <ComboboxGroup>
              <ComboboxItem
                v-for="language in languages"
                :key="language.value"
                :value="language"
                @select="() => {
                  setFieldValue('language', language.value)
                }"
              >
                {{ language.label }}

                <ComboboxItemIndicator>
                  <Check :class="cn('ml-auto h-4 w-4')" />
                </ComboboxItemIndicator>
              </ComboboxItem>
            </ComboboxGroup>
          </ComboboxList>
        </Combobox>

        <FormDescription>
          This is the language that will be used in the dashboard.
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
