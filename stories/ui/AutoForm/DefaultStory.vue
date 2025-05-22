<script setup lang="ts">
import { toast } from '@/components/ui/toast'
import type { UserRecord } from './data/user.ts'
import { fieldConfig } from './data/field-config.ts'
import { userSchema } from './data/user.ts'

function onSubmit(values: UserRecord) {
  toast({
    title: 'You submitted the following values:',
    description: h(
      'pre',
      { class: 'mt-2 w-full rounded-md bg-slate-950 p-4' },
      h('code', { class: 'text-white' }, JSON.stringify(values, null, 2)),
    ),
  })
}
</script>

<template>
  <AutoForm
    class="w-full space-y-6 sm:w-2/3"
    :schema="userSchema"
    :field-config="fieldConfig"
    @submit="onSubmit"
  >
    <template #acceptTerms="slotProps">
      <AutoFormField v-bind="slotProps" />
      <div class="!mt-2 text-sm">
        I agree to the <button class="text-primary underline">
          terms and conditions
        </button>.
      </div>
    </template>

    <template #customParent="slotProps">
      <div class="flex items-end space-x-2">
        <AutoFormField v-bind="slotProps" class="w-full" />
        <Button type="button">
          Check
        </Button>
      </div>
    </template>

    <Button type="submit">
      Submit
    </Button>
  </AutoForm>
</template>
