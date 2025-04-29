<script setup lang="ts">
import Header from './SidebarLayout/Header.vue'
import LeftSidebar from './SidebarLayout/LeftSidebar.vue'
</script>

<template>
  <SidebarProvider>
    <LeftSidebar />
    <SidebarInset class="px-2 bg-background">
      <Header />
      <RouterView />
    </SidebarInset>
  </SidebarProvider>
</template>
