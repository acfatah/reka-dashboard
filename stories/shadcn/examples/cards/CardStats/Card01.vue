<script setup lang="ts">
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { LineChart } from '@/components/ui/line-chart'
import { VisScatter } from '@unovis/vue'
import type { Data } from './data.ts'
import { data } from './data.ts'
</script>

<template>
  <Card>
    <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle class="text-sm font-normal">
        Total Revenue
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div class="text-2xl font-bold">
        $15,231.89
      </div>
      <p class="text-xs text-muted-foreground">
        +20.1% from last month
      </p>

      <div class="h-20">
        <LineChart
          class="h-[80px]"
          :data="data"
          :margin="{ top: 5, right: 10, left: 10, bottom: 0 }"
          :categories="['revenue']"
          index="revenue"
          :show-grid-line="false"
          :show-legend="false"
          :show-tooltip="false"
          :show-x-axis="false"
          :show-y-axis="false"
        >
          <VisScatter
            color="white"
            stroke-color="var(--primary)"
            :x="(d: Data, i: number) => i"
            :y="(d: Data) => d.revenue"
            :size="6"
            :stroke-width="2"
          />
        </LineChart>
      </div>
    </CardContent>
  </Card>
</template>
