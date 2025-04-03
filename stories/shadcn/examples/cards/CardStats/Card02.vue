<script setup lang="ts">
import { BarChart } from '@/components/ui/bar-chart'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import type { Data } from './data.ts'
import { data } from './data.ts'
</script>

<template>
  <Card>
    <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle class="text-sm font-normal">
        Subscriptions
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div class="text-2xl font-bold">
        +2350
      </div>
      <p class="text-xs text-muted-foreground">
        +54.8% from last month
      </p>

      <div class="mt-4 h-20">
        <BarChart
          class="h-[80px]"
          :data="(data as Data[])"
          :categories="['subscription']"
          index="subscription"
          :show-grid-line="false"
          :show-legend="false"
          :show-x-axis="false"
          :show-y-axis="false"
          :show-tooltip="false"
        />
        <!-- <VisXYContainer
            height="80px" :data="data"
          >
            <VisStackedBar
              :x="(d: Data, i:number) => i"
              :y="(d: Data) => d.subscription"
              :bar-padding="0.1"
              :rounded-corners="0" color="hsl(var(--primary))"
            />
          </VisXYContainer> -->
      </div>
    </CardContent>
  </Card>
</template>
