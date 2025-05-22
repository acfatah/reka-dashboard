<script setup lang="ts">
defineProps<{
  to: string
  title: string
}>()
</script>

<template>
  <li>
    <NavigationMenuLink as-child>
      <RouterLink :to="to">
        <div class="text-sm leading-none font-medium">
          {{ title }}
        </div>
        <p class="text-muted-foreground line-clamp-2 text-sm leading-snug">
          <slot />
        </p>
      </RouterLink>
    </NavigationMenuLink>
  </li>
</template>
