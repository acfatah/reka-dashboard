<script setup lang="ts">
import { getLocalTimeZone, today } from '@internationalized/date'
import { ref } from 'vue'
import type { DateRange } from '@/components/ui/range-calendar'

import { RangeCalendar } from '@/components/ui/range-calendar'

import ActivityGoal from './ActivityGoal.vue'
import CardChat from './CardChat.vue'
import CardStats from './CardStats/CardStats.vue'
import CookieSettings from './CookieSettings.vue'
import CreateAccount from './CreateAccount.vue'
import DataTable from './DataTable.vue'
import DatePicker from './DatePicker.vue'
import GithubCard from './GithubCard.vue'
import Metric from './Metric.vue'
import Notifications from './Notifications.vue'
import PaymentMethod from './PaymentMethod.vue'
import ReportAnIssue from './ReportAnIssue.vue'
import ShareDocument from './ShareDocument.vue'
import TeamMembers from './TeamMembers.vue'

const now = today(getLocalTimeZone())

const range = ref({
  start: now,
  end: now.add({ days: 8 }),
}) as Ref<DateRange>
</script>

<template>
  <div
    class="md:grids-cols-2 container p-4 m-auto grid grid-cols-1 items-start justify-center gap-6 rounded-lg md:gap-4 lg:grid-cols-10 xl:grid-cols-11 xl:gap-4"
  >
    <div class="w-full space-y-4 lg:col-span-4 xl:col-span-6 xl:space-y-4">
      <div class="gap-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2">
        <CardStats />
      </div>

      <div class="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        <div class="space-y-4">
          <TeamMembers />
          <CookieSettings />
          <PaymentMethod />

          <GithubCard />
          <DatePicker />
        </div>

        <div class="space-y-4">
          <CardChat />
          <CreateAccount />
          <ReportAnIssue />

          <Notifications />
        </div>
      </div>
    </div>

    <div class="space-y-4 xl:space-y-4 lg:col-span-6 xl:col-span-5 w-full">
      <div class="gap-1 grid grid-cols-1 md:grid-cols-none">
        <Card class="max-w-min min-w-min">
          <RangeCalendar v-model="range" />
        </Card>

        <div class="w-full pt-3 sm:pt-0 md:pl-2 xl:pl-3">
          <ActivityGoal />
        </div>

        <div class="sm:col-span-2 pt-3 xl:pt-3">
          <Metric />
        </div>

        <div class="sm:col-span-2 pt-3 xl:pt-3">
          <DataTable />
        </div>

        <div class="sm:col-span-2 pt-3 xl:pt-3">
          <ShareDocument />
        </div>
      </div>
    </div>
  </div>
</template>
