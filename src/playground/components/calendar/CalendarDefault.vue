<script setup lang="ts">
import { getLocalTimeZone, today } from '@internationalized/date'
import { ref } from 'vue'
import { Calendar } from '@/components/ui/calendar'

const date = ref(today(getLocalTimeZone()))
</script>

<template>
  <Calendar
    :value="date"
    weekday-format="short"
    class="w-fit rounded-md border"
  />
</template>
