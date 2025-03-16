<script setup lang="ts">
import type { DateRange } from 'reka-ui'
import type { Ref } from 'vue'
import { RangeCalendar } from '@/components/ui/range-calendar'
import { getLocalTimeZone, today } from '@internationalized/date'
import { ref } from 'vue'

const start = today(getLocalTimeZone())
const end = start.add({ days: 7 })

const value = ref({
  start,
  end,
}) as Ref<DateRange>
</script>

<template>
  <RangeCalendar v-model="value" class="w-fit rounded-md border" />
</template>
