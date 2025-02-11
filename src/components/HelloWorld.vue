<script setup lang="ts">
import { useCounterStore } from '@/stores'

defineProps<{
  msg: string
}>()

const counterStore = useCounterStore()
</script>

<template>
  <div class="greetings">
    <h1 class="green">
      {{ msg }}
    </h1>

    <button @click="counterStore.increment()">
      count is {{ counterStore.count }}
    </button>

    <h3>
      You’ve successfully created a project with
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

button {
  padding: 0.6em 1.2em;
  margin: 0.5em 0.5em 0.5em 0;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
