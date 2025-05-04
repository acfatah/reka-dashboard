<script setup lang="ts">
import { Calendar } from '@/components/ui/calendar'
import { getLocalTimeZone, today } from '@internationalized/date'
import { ref } from 'vue'

const date = ref(today(getLocalTimeZone()))
</script>

<template>
  <Calendar
    :value="date"
    weekday-format="short"
    class="w-fit rounded-md border"
  />
</template>
