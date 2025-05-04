<script setup lang="ts">
import { RangeCalendar } from '@/components/ui/range-calendar'
import { getLocalTimeZone, today } from '@internationalized/date'
import { reactive } from 'vue'

const dateRange = reactive({
  start: today(getLocalTimeZone()),
  end: today(getLocalTimeZone()).add({ days: 35 }),
})
</script>

<template>
  <RangeCalendar
    v-model="dateRange"
    :number-of-months="2"
    class="rounded-md border w-min"
  />
</template>
