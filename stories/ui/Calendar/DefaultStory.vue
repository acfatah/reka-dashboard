<script setup lang="ts">
import type { DateValue } from '@internationalized/date'
import type { Ref } from 'vue'
import { Calendar } from '@/components/ui/calendar'
import { getLocalTimeZone, today } from '@internationalized/date'
import { ref } from 'vue'

const value = ref(today(getLocalTimeZone())) as Ref<DateValue>
</script>

<template>
  <Calendar
    v-model="value"
    weekday-format="short"
    class="w-fit rounded-md border"
  />
</template>
