<script setup lang="ts">
import type { DateValue } from '@internationalized/date'
import {
  CalendarDate,
  DateFormatter,
  getLocalTimeZone,
} from '@internationalized/date'

const dateRange = ref({
  start: new CalendarDate(new Date().getFullYear(), 0, 20),
  end: new CalendarDate(new Date().getFullYear(), 0, 20).add({ days: 20 }),
}) as Ref<{ start: DateValue, end: DateValue }>

const drf = new DateFormatter('en-US', {
  dateStyle: 'medium',
})
</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button
        id="date"
        variant="outline"
        :class="cn(
          'w-fit justify-start px-2 font-normal',
          !dateRange && 'text-muted-foreground',
        )"
      >
        <Icon icon="lucide:calendar" class="text-muted-foreground" />

        <template v-if="dateRange.start">
          <template v-if="dateRange.end">
            {{ drf.format(dateRange.start.toDate(getLocalTimeZone())) }} - {{ drf.format(dateRange.end.toDate(getLocalTimeZone())) }}
          </template>

          <template v-else>
            {{ drf.format(dateRange.start.toDate(getLocalTimeZone())) }}
          </template>
        </template>
        <template v-else>
          Pick a date
        </template>
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-auto p-0" align="start">
      <RangeCalendar
        v-model="dateRange"
        :number-of-months="2"
        initial-focus
      />
    </PopoverContent>
  </Popover>
</template>
