<script setup lang="ts">
import type { DateValue } from '@internationalized/date'
import { DateFormatter, getLocalTimeZone } from '@internationalized/date'

const date = ref() as Ref<DateValue>

const df = new DateFormatter('en-US', {
  dateStyle: 'long',
})
</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button
        variant="outline"
        :class="cn(
          'min-w-[200px] justify-start px-2 font-normal',
          !date && 'text-muted-foreground',
        )"
      >
        <Icon icon="lucide:calendar" class="text-muted-foreground" />
        {{ date ? df.format(date.toDate(getLocalTimeZone())) : "Pick a date" }}
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-auto p-0" align="start">
      <Calendar
        v-model="date"
        initial-focus
      />
    </PopoverContent>
  </Popover>
</template>
