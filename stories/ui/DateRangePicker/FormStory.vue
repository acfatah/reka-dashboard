<script setup lang="ts">
import type { GenericObject, SubmissionHandler } from 'vee-validate'
import { toast } from '@/components/ui/toast'
import {
  DateFormatter,
  getLocalTimeZone,
  parseDate,
} from '@internationalized/date'
import { toTypedSchema } from '@vee-validate/zod'
import { h } from 'vue'
import { z } from 'zod'

const df = new DateFormatter('en-US', {
  dateStyle: 'long',
})

type SubmissionRecord = z.infer<typeof schema>
const schema = z.object({
  dateRange: z
    .object({
      start: z.string(),
      end: z.string(),
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
    v-slot="{ meta, setFieldValue }"
    class="space-y-8"
    :validation-schema="formSchema"
    @submit="onSubmit"
  >
    <FormField v-slot="{ value }" name="dateRange">
      <FormItem class="flex flex-col">
        <FormLabel>Date Range</FormLabel>

        <Popover>
          <PopoverTrigger as-child>
            <Button
              variant="outline"
              :class="cn(
                'w-[312px] justify-start text-left font-normal',
                !value && 'text-muted-foreground',
              )"
            >
              <Iconify icon="lucide:calendar" class="mr-2 size-4" />
              <template v-if="value.start">
                <template v-if="value.end">
                  {{ df.format(parseDate(value.start).toDate(getLocalTimeZone())) }} - {{ df.format(parseDate(value.end).toDate(getLocalTimeZone())) }}
                </template>

                <template v-else>
                  {{ df.format(parseDate(value.start).toDate(getLocalTimeZone())) }}
                </template>
              </template>
              <template v-else>
                Pick a date
              </template>
            </Button>
          </PopoverTrigger>
          <PopoverContent align="start" class="w-auto p-0">
            <RangeCalendar
              :value="value"
              class="min-h-[346px] p-3"
              initial-focus
              :number-of-months="2"
              @update:model-value="(rangeDate) => {
                setFieldValue('dateRange', {
                  start: rangeDate.start?.toString(),
                  end: rangeDate.end?.toString(),
                })
              }"
            />
          </PopoverContent>
        </Popover>
        <FormDescription>
          The date range.
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
