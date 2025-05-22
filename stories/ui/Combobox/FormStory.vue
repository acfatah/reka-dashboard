<script setup lang="ts">
import type { GenericObject, SubmissionHandler } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'
import { toast } from '@/components/ui/toast'

interface FrameworkRecord {
  label: string
  value: string
}

const frameworks: FrameworkRecord[] = [
  { value: 'next.js', label: 'Next.js' },
  { value: 'sveltekit', label: 'SvelteKit' },
  { value: 'nuxt', label: 'Nuxt' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
]

const schema = z.object({
  framework: z.string({
    required_error: 'Please select a framework.',
  }),
})

const formSchema = toTypedSchema(schema)

const initialValues = {
  //
}

const onSubmit: SubmissionHandler<GenericObject> = function (values) {
  const formValues = values as FrameworkRecord

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
    :validation-schema="formSchema"
    :initial-values="initialValues"
    @submit="onSubmit"
  >
    <div class="flex w-full flex-col space-y-6 md:w-3/4 lg:3/4">
      <FormField
        v-slot="{ componentField, meta: fieldMeta, value, handleBlur, handleChange }"
        name="framework"
      >
        <FormItem class="flex flex-col">
          <FormLabel>Language</FormLabel>

          <FormControl>
            <Combobox
              v-slot="{ open }"
              v-bind="componentField"
              by="label"
              :model-value="value"
              @update:model-value="handleChange"
              @update:open="val => !val && handleBlur()"
            >
              <ComboboxAnchor
                as-child
                @blur="!open && !value && handleBlur()"
              >
                <ComboboxTrigger as-child>
                  <Button
                    variant="outline"
                    class="justify-between"
                    :aria-invalid="fieldMeta.touched && !fieldMeta.valid"
                  >
                    {{ frameworks.find((i: FrameworkRecord) => i.value === value)?.label ?? 'Select framework' }}
                    <Icon
                      icon="lucide:chevrons-up-down"
                      class="opacity-50"
                    />
                  </Button>
                </ComboboxTrigger>
              </ComboboxAnchor>

              <ComboboxList>
                <ComboboxInput placeholder="Search framework..." />

                <ComboboxEmpty>
                  No framework found.
                </ComboboxEmpty>

                <ComboboxGroup>
                  <ComboboxItem
                    v-for="framework in frameworks"
                    :key="framework.value"
                    :value="framework.value"
                  >
                    {{ framework.label }}

                    <ComboboxItemIndicator>
                      <Icon icon="lucide:check" />
                    </ComboboxItemIndicator>
                  </ComboboxItem>
                </ComboboxGroup>
              </ComboboxList>
            </Combobox>
          </FormControl>

          <FormDescription>
            This is the language that will be used in the dashboard.
          </FormDescription>
          <FormMessage />
        </FormItem>
      </FormField>
    </div>

    <div class="mt-6 flex flex-col space-y-2 sm:flex-row sm:space-x-2">
      <Button
        type="submit"
        :disabled="!(meta.dirty && meta.valid)"
      >
        Submit
      </Button>
    </div>
  </Form>
</template>
