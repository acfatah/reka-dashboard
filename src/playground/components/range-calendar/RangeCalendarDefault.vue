<script setup lang="ts">
import { RangeCalendar } from '@/components/ui/range-calendar'
import { getLocalTimeZone, today } from '@internationalized/date'
import { ref } from 'vue'

const dateRange = ref({
  start: today(getLocalTimeZone()),
  end: today(getLocalTimeZone()).add({ days: 7 }),
})
</script>

<template>
  <RangeCalendar
    v-model="dateRange"
    class="rounded-md border w-min"
  />
</template>
