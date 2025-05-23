<script setup lang="ts">
import type { GenericObject, SubmissionHandler } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { h } from 'vue'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/toast'

type SubmissionRecord = z.infer<typeof schema>
const schema = z.object({
  name: z.string().min(2).max(50),
  username: z.string().min(2).max(50),
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
  <Dialog>
    <DialogTrigger as-child>
      <Button variant="outline">
        Edit Profile
      </Button>
    </DialogTrigger>
    <DialogContent class="sm:max-w-sm">
      <Form
        v-slot="{ meta }"
        :validation-schema="formSchema"
        class="space-y-4"
        @submit="onSubmit"
      >
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>

        <FormField v-slot="{ componentField }" name="name">
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input type="text" placeholder="Pedro Duarte" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="username">
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input type="text" placeholder="@peduarte" v-bind="componentField" />
            </FormControl>
            <FormDescription>
              This is your public display name.
            </FormDescription>
            <FormMessage />
          </FormItem>
        </FormField>

        <DialogFooter>
          <DialogClose :as="Button" variant="outline">
            Close
          </DialogClose>
          <Button
            type="submit"
            :disabled="!(meta.dirty && meta.valid)"
          >
            Save changes
          </Button>
        </DialogFooter>
      </Form>
    </DialogContent>
  </Dialog>
</template>
