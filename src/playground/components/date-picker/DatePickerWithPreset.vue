<script setup lang="ts">
import type { DateValue } from '@internationalized/date'
import {
  DateFormatter,
  getLocalTimeZone,
  today,
} from '@internationalized/date'
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Icon } from '@/components/ui/icon'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { cn } from '@/lib/utils'

const df = new DateFormatter('en-US', {
  dateStyle: 'long',
})

const items = [
  { value: 0, label: 'Today' },
  { value: 1, label: 'Tomorrow' },
  { value: 3, label: 'In 3 days' },
  { value: 7, label: 'In a week' },
]

const value = ref<DateValue>()
</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button
        variant="outline"
        :class="cn(
          'w-[200px] justify-start text-left font-normal',
          !value && 'text-muted-foreground',
        )"
      >
        <Icon icon="lucide:calendar" />
        {{ value ? df.format(value.toDate(getLocalTimeZone())) : "Pick a date" }}
      </Button>
    </PopoverTrigger>
    <PopoverContent align="start" class="flex w-auto flex-col p-0">
      <div class="p-2 pb-0">
        <Select
          @update:model-value="(v) => {
            if (!v) return;
            value = today(getLocalTimeZone()).add({ days: Number(v) });
          }"
        >
          <SelectTrigger class="w-full">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem v-for="item in items" :key="item.value" :value="item.value.toString()">
              {{ item.label }}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Calendar v-model="value" />
    </PopoverContent>
  </Popover>
</template>
