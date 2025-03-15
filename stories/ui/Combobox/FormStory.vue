<script setup lang="ts">
import type { GenericObject, SubmissionHandler } from 'vee-validate'
import { toast } from '@/components/ui/toast'
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'

const languageDropdownOpen = ref(false)

interface Language {
  label: string
  value: string
}

const languages: Language[] = [
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
    v-slot="{ values, setFieldValue }"
    class="space-y-6"
    :validation-schema="formSchema"
    :initial-values="initialValues"
    @submit="onSubmit"
  >
    <FormField name="language">
      <FormItem class="flex flex-col">
        <FormLabel>Language</FormLabel>
        <Popover :open="languageDropdownOpen">
          <PopoverTrigger as-child>
            <FormControl>
              <Button
                variant="outline"
                role="combobox"
                :class="cn('w-[200px] justify-between', !values.language && 'text-muted-foreground')"
                @click="languageDropdownOpen = !languageDropdownOpen"
              >
                {{ values.language ? languages.find(
                  (language) => language.value === values.language,
                )?.label : 'Select language...' }}
                <Iconify icon="lucide:chevrons-up-down" class="ml-2 size-4 shrink-0 opacity-50" />
              </Button>
            </FormControl>
          </PopoverTrigger>
          <PopoverContent class="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search language..." />
              <CommandEmpty>Nothing found.</CommandEmpty>
              <CommandList>
                <CommandGroup>
                  <CommandItem
                    v-for="language in languages"
                    :key="language.value"
                    :value="language.label"
                    @select="() => {
                      setFieldValue('language', language.value)
                      languageDropdownOpen = false
                    }"
                  >
                    {{ language.label }}
                    <Iconify
                      icon="lucide:check"
                      :class="cn(
                        'ml-auto h-4 w-4',
                        language.value === values.language ? 'opacity-100' : 'opacity-0',
                      )"
                    />
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        <FormDescription>
          This is the language that will be used in the dashboard.
        </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>

    <Button type="submit">
      Submit
    </Button>
  </Form>
</template>
