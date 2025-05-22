<script setup lang="ts">
import type { GenericObject, SubmissionHandler } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { useFetch } from '@vueuse/core'
import { z } from 'zod'
import { toast } from '@/components/ui/toast'

interface PostcodeRecord {
  postcode: string
  city: string
  state: string
}

const {
  data: postcodes,
  execute: fetchPostcodes,
  isFinished: postcodesFetched,
} = useFetch('https://raw.githubusercontent.com/acfatah/malaysia-postcodes-data/refs/heads/main/postcodes.json', {
  immediate: false,
  initialData: [],
}).get().json<PostcodeRecord[]>()

async function handlePostcodeCombobox(val: boolean) {
  if (val && postcodes.value?.length === 0)
    fetchPostcodes()
}

const schema = z.object({
  postcode: z
    .string({
      required_error: 'Postcode is required.',
    })
    .refine(value => value.length === 5 && /^\d+$/.test(value), {
      message: 'Invalid postcode',
    }),
})

const formSchema = toTypedSchema(schema)

const initialValues = {
  //
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
    v-slot="{ meta }"
    class="space-y-6"
    :validation-schema="formSchema"
    :initial-values="initialValues"
    @submit="onSubmit"
  >
    <FormField
      v-slot="{ componentField, meta: fieldMeta, value, setValue, handleChange }"
      name="postcode"
    >
      <FormItem class="flex flex-col">
        <FormLabel>Postcode</FormLabel>
        <FormControl>
          <Combobox
            :ignore-filter="true"
            :reset-search-term-on-blur="false"
            :reset-search-term-on-select="false"
            @update:model-value="setValue($event)"
            @update:open="handlePostcodeCombobox"
          >
            <ComboboxAnchor>
              <div
                :aria-invalid="fieldMeta.touched && !fieldMeta.valid"
                :class="cn(
                  'relative w-full max-w-sm',
                  'border rounded-md',
                  'focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/50',
                  'aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40',
                  '[&>[data-slot=command-input-wrapper]]:px-2 [&>[data-slot=command-input-wrapper]]:border-none',
                  '[&>[data-slot=command-input-wrapper]>svg]:hidden',
                )"
              >
                <ComboboxInput
                  v-bind="componentField"
                  placeholder="Postcode"
                  :aria-invalid="fieldMeta.touched && !fieldMeta.valid"
                  @update:model-value="handleChange"
                />
              </div>
            </ComboboxAnchor>

            <ComboboxList>
              <ComboboxEmpty>
                {{ postcodesFetched ? 'Nothing found' : 'Loading...' }}.
              </ComboboxEmpty>

              <ComboboxGroup class="max-h-[200px] overflow-y-auto">
                <ComboboxItem
                  v-for="postcode in postcodes.filter((i: PostcodeRecord) =>
                    i.postcode.startsWith(value)
                    || i.city.toLocaleLowerCase().startsWith(value.toLocaleLowerCase())
                    || i.state.toLocaleLowerCase().startsWith(value.toLocaleLowerCase()),
                  )"
                  :key="postcode.postcode"
                  :value="postcode.postcode"
                >
                  {{ postcode.postcode }} {{ postcode.city }}, {{ postcode.state }}
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

    <Button
      type="submit"
      :disabled="!(meta.dirty && meta.valid)"
    >
      Submit
    </Button>
  </Form>
</template>
