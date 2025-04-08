<script setup lang="ts">
import routes from '../routes.ts'
</script>

<template>
  <nav class="flex flex-wrap space-y-1 sm:flex-nowrap sm:gap-x-1 sm:space-y-0 lg:flex-col lg:space-y-1">
    <Button
      v-for="item in routes"
      :key="item.name"
      :href="item.path"
      variant="ghost"
      :class="cn(
        'w-full justify-start px-2 text-left sm:justify-center lg:justify-start md:px-4',
        $route.path === item.path && 'bg-muted hover:bg-muted',
      )"
      @click.stop.prevent="$router.push(item.path)"
    >
      {{ item.name }}
    </Button>
  </nav>
</template>
