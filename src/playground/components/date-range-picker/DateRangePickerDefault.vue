<script setup lang="ts">
import type { DateRange } from '@/components/ui/range-calendar'
import { RangeCalendar } from '@/components/ui/range-calendar'
import { DateFormatter, getLocalTimeZone, today } from '@internationalized/date'
import { reactive } from 'vue'

const start = today(getLocalTimeZone())
const end = start.add({ days: 47 })

const df = new DateFormatter('en-US', {
  dateStyle: 'long',
})

const dateRange = reactive<DateRange>({ start, end })

const formattedValue = computed(() => {
  if (dateRange.start && dateRange.end)
    return `${df.format(dateRange.start.toDate(getLocalTimeZone()))} - ${df.format(dateRange.end.toDate(getLocalTimeZone()))}`

  return 'Pick a date'
})

function updateDateRange(value: DateRange) {
  dateRange.start = value.start
  dateRange.end = value.end
}
</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button
        variant="outline"
        :class="cn(
          'w-fit justify-start text-left font-normal',
          !dateRange && 'text-muted-foreground',
        )"
      >
        <Icon icon="lucide:calendar" />
        {{ formattedValue }}
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-auto p-0" align="start">
      <RangeCalendar
        :value="dateRange"
        :number-of-months="2"
        class="w-fit rounded-md border"
        @update:model-value="updateDateRange"
      />
    </PopoverContent>
  </Popover>
</template>
