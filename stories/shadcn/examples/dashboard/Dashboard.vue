<script setup lang="ts">
import DashboardTabs from './components/DashboardTabs.vue'
import DateRangePicker from './components/DateRangePicker.vue'
import MainNav from './components/MainNav.vue'
import Search from './components/Search.vue'
import TeamSwitcher from './components/TeamSwitcher.vue'
import UserNav from './components/UserNav.vue'
</script>

<template>
  <div class="flex flex-col">
    <div class="border-b">
      <div class="flex h-16 items-center px-4">
        <TeamSwitcher />
        <MainNav class="ml-6" />
        <div class="ml-auto flex items-center space-x-4">
          <Search />
          <UserNav />
        </div>
      </div>
    </div>
    <div class="flex-1 space-y-4 p-6">
      <div class="flex-none md:flex justify-between space-y-2">
        <h2 class="text-3xl font-bold tracking-tight">
          Dashboard
        </h2>
        <div class="flex items-center space-x-2">
          <DateRangePicker />
          <Button>Download</Button>
        </div>
      </div>
      <DashboardTabs />
    </div>
  </div>
</template>
