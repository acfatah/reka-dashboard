<script setup lang="ts">
import DatePickerWithRange from './components/DatePickerWithRange.vue'
</script>

<template>
  <Card>
    <CardContent class="pt-6">
      <div class="space-y-2">
        <Label for="date" class="shrink-0">
          Pick a date
        </Label>
        <DatePickerWithRange />
      </div>
    </CardContent>
  </Card>
</template>
