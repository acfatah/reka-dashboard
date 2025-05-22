<script setup lang="ts">
import type { GenericObject, SubmissionHandler } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { h } from 'vue'
import * as z from 'zod'
import { toast } from '@/components/ui/toast'

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

type SubmissionRecord = z.infer<typeof schema>

const schema = z.object({
  name: z.string().min(2).max(50),
  framework: z.string().min(2).max(50),
})

const formSchema = toTypedSchema(schema)

const onSubmit: SubmissionHandler<GenericObject> = function (values) {
  const formValues = values as SubmissionRecord

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
  <Card class="w-[350px]">
    <CardHeader>
      <CardTitle>Create project</CardTitle>
      <CardDescription>Deploy your new project in one-click.</CardDescription>
    </CardHeader>
    <Form
      v-slot="{ meta }"
      :validation-schema="formSchema"
      class="space-y-4"
      @submit="onSubmit"
    >
      <CardContent class="space-y-4">
        <FormField v-slot="{ componentField }" name="name">
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input type="text" placeholder="Name of your project" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="email">
          <FormItem>
            <FormLabel>Email</FormLabel>
            <Select v-bind="componentField">
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectGroup>
                  <SelectItem
                    v-for="framework in frameworks"
                    :key="framework.value"
                    :value="framework.value"
                  >
                    {{ framework.label }}
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        </FormField>
      </CardContent>

      <CardFooter class="flex justify-end gap-2 px-6">
        <Button variant="outline">
          Cancel
        </Button>
        <Button
          type="submit"
          :disabled="!(meta.dirty && meta.valid)"
        >
          Deploy
        </Button>
      </CardFooter>
    </Form>
  </Card>
</template>
