<script setup lang="ts">
import {
  CalendarDate,
  DateFormatter,
  getLocalTimeZone,
} from '@internationalized/date'
import type { DateRange } from '@/components/ui/range-calendar'
import { Icon } from '@/components/ui/icon'

const df = new DateFormatter('en-US', {
  dateStyle: 'medium',
})

const calendarDate = new CalendarDate(2023, 0, 20)

const value = ref({
  start: calendarDate,
  end: calendarDate.add({ days: 20 }),
}) as Ref<DateRange>
</script>

<template>
  <div :class="cn('flex gap-2 w-full', $attrs.class ?? '')">
    <Popover>
      <PopoverTrigger as-child>
        <Button
          id="date"
          variant="outline"
          :class="cn(
            'grow md:w-[300px] justify-start text-left font-normal',
            !value && 'text-muted-foreground',
          )"
        >
          <Icon icon="lucide:calendar" class="mr-2 size-4" />

          <template v-if="value.start">
            <template v-if="value.end">
              {{ df.format(value.start.toDate(getLocalTimeZone())) }} - {{ df.format(value.end.toDate(getLocalTimeZone())) }}
            </template>

            <template v-else>
              {{ df.format(value.start.toDate(getLocalTimeZone())) }}
            </template>
          </template>
          <template v-else>
            Pick a date
          </template>
        </Button>
      </PopoverTrigger>
      <PopoverContent class="w-auto p-0" align="end">
        <RangeCalendar
          v-model="value"
          weekday-format="short"
          :number-of-months="2"
          initial-focus
          :placeholder="value.start"
          @update:start-value="(startDate) => value.start = startDate"
        />
      </PopoverContent>
    </Popover>
  </div>
</template>
