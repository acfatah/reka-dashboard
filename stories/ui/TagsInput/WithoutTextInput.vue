<script setup lang="ts">
import type { GenericObject, SubmissionHandler } from 'vee-validate'
import { TagsInputInput } from '@/components/ui/tags-input'
import { toast } from '@/components/ui/toast'
import { toTypedSchema } from '@vee-validate/zod'
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
  frameworks: [],
}

const open = ref(false)
const searchTerm = ref('')

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
    class="w-2/3 space-y-6"
    :validation-schema="formSchema"
    :initial-values="initialValues"
    @submit="onSubmit"
  >
    <FormField v-slot="{ value, handleChange }" name="frameworks">
      <FormItem>
        <FormLabel>Frameworks</FormLabel>
        <FormControl>
          <TagsInput
            class="relative flex-nowrap w-80 gap-0 px-0 min-h-8"
            :model-value="value"
            :display-value="(value => frameworks.find(i => i.value === value)?.label as string)"
            @update:model-value="handleChange"
            @click.prevent="($refs.frameworkTagsInputRef as InstanceType<typeof TagsInputInput>).$el.focus()"
          >
            <div class="flex flex-wrap items-center gap-2 px-3">
              <TagsInputItem
                v-for="item in value"
                :key="item"
                :value="(frameworks.find(i => i.value === item)?.value as string)"
              >
                <TagsInputItemText />
                <TagsInputItemDelete />
              </TagsInputItem>
              <span
                v-if="value.length === 0"
                class="text-sm text-muted-foreground select-none"
              >Framework...</span>
            </div>

            <ComboboxRoot
              v-model:open="open"
              v-model:search-term="searchTerm"
              class="absolute left-0 bottom-0 w-full -z-10"
              :value="value"
              @update:value="handleChange"
            >
              <ComboboxAnchor as-child>
                <ComboboxInput as-child>
                  <TagsInputInput
                    ref="frameworkTagsInputRef"
                    class="w-full px-3"
                    @focus="open = true"
                    @keydown.prevent
                  />
                </ComboboxInput>
              </ComboboxAnchor>

              <ComboboxPortal>
                <ComboboxContent>
                  <CommandList
                    position="popper"
                    class="mt-2 w-(--reka-popper-anchor-width) rounded-md border bg-popover text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
                  >
                    <CommandEmpty />
                    <CommandGroup>
                      <CommandItem
                        v-for="framework in frameworks.filter(i => !value.includes(i.value))"
                        :key="framework.value"
                        :value="framework.label"
                        @select.prevent="(ev) => {
                          if (typeof ev.detail.value === 'string') {
                            searchTerm = ''
                            value.push(framework.value)
                          }

                          if (frameworks.filter(i => !value.includes(i.value)).length === 0) {
                            open = false
                          }
                        }"
                      >
                        {{ framework.label }}
                      </CommandItem>
                    </CommandGroup>
                  </CommandList>
                </ComboboxContent>
              </ComboboxPortal>
            </ComboboxRoot>
          </TagsInput>
        </FormControl>
        <FormDescription>
          Select your frameworks.
        </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>

    <Button type="submit">
      Submit
    </Button>
  </Form>
</template>
