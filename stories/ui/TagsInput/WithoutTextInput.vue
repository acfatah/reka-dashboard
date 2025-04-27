<script setup lang="ts">
import type { GenericObject, SubmissionHandler } from 'vee-validate'
import { TagsInputInput } from '@/components/ui/tags-input'
import { toast } from '@/components/ui/toast'
import { cn } from '@/lib/utils'
import { toTypedSchema } from '@vee-validate/zod'
import { useFilter } from 'reka-ui'
import { computed, h, ref } from 'vue'
import { z } from 'zod'

interface FrameworkRecord {
  label: string
  value: string
}

const frameworks: FrameworkRecord[] = [
  { label: 'Next.js', value: 'next.js' },
  { label: 'SvelteKit', value: 'sveltekit' },
  { label: 'Nuxt', value: 'nuxt' },
  { label: 'Remix', value: 'remix' },
  { label: 'Astro', value: 'astro' },
]

const schema = z.object({
  frameworks: z.array(z.string()).min(1).max(3),
})

const formSchema = toTypedSchema(schema)

const initialValues = {
  frameworks: ['nuxt'],
}

const open = ref(false)
const searchTerm = ref('')
const { contains } = useFilter({ sensitivity: 'base' })

const filteredFrameworks = computed(() => {
  return searchTerm.value
    ? frameworks.filter(option => contains(option.label, searchTerm.value))
    : frameworks
})

const onSubmit: SubmissionHandler<GenericObject> = function (values) {
  const formValues = values as FrameworkRecord

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
    class="w-2/3 space-y-6"
    :validation-schema="formSchema"
    :initial-values="initialValues"
    @submit="onSubmit"
  >
    <FormField v-slot="{ value, handleChange }" name="frameworks">
      <FormItem>
        <FormLabel>Frameworks</FormLabel>
        <FormControl>
          <Combobox
            v-model:open="open"
            class="w-full"
            ignore-filter
            :model-value="value"
            @update:model-value="handleChange"
          >
            <ComboboxAnchor as-child>
              <TagsInput
                :class="cn(
                  'w-80 gap-0 px-1.5 py-0 flex-nowrap',
                  open && 'ring-1 ring-ring outline-none',
                )"
                :display-value="(value) => frameworks.find(
                  (record: FrameworkRecord) => record.value === value)?.label ?? ''
                "
                :model-value="value"
                @update:model-value="handleChange"
                @click.prevent="($refs.frameworkTagsInputRef as InstanceType<typeof TagsInputInput>).$el.focus()"
              >
                <div
                  :class="cn(
                    'flex flex-wrap items-center gap-2 w-full',
                    value.length > 0 && 'py-1.5',
                  )"
                >
                  <TagsInputItem
                    v-for="item in value"
                    :key="item"
                    :value="frameworks.find((record: FrameworkRecord) => record.value === item)?.value ?? ''"
                  >
                    <TagsInputItemText />
                    <TagsInputItemDelete />
                  </TagsInputItem>
                </div>

                <ComboboxInput
                  v-model="searchTerm"
                  as-child
                  class="my-0 border-none shadow-none focus:outline-none focus-visible:ring-0"
                >
                  <TagsInputInput
                    ref="frameworkTagsInputRef"
                    class="px-0 caret-transparent bg-transparent"
                    placeholder="Framework..."
                    @focus="open = true"
                    @keydown.enter.prevent
                  />
                </ComboboxInput>
              </TagsInput>

              <ComboboxList class="w-(--reka-popper-anchor-width)">
                <ComboboxEmpty />
                <ComboboxGroup>
                  <ComboboxItem
                    v-for="framework in filteredFrameworks.filter((i: FrameworkRecord) => !value.includes(i.value))"
                    :key="framework.value"
                    :value="framework.label"
                    @select.prevent="(ev) => {
                      if (typeof ev.detail.value === 'string') {
                        searchTerm = ''
                        handleChange([...value, framework.value])
                        open = false
                      }

                      if (filteredFrameworks.length === 0) {
                        open = false
                      }
                    }"
                  >
                    {{ framework.label }}
                  </ComboboxItem>
                </ComboboxGroup>
              </ComboboxList>
            </ComboboxAnchor>
          </Combobox>
        </FormControl>
        <FormDescription>
          Select your frameworks.
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
