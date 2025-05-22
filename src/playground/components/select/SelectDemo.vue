<script setup lang="ts">
import { Icon } from '@iconify/vue'

const selectedChart = ref<keyof typeof chartOptions>()
const chartOptions = {
  line: h(() => [h(Icon, { icon: 'lucide:chart-line' }), 'Line']),
  bar: h(() => [h(Icon, { icon: 'lucide:chart-bar' }), 'Bar']),
  pie: h(() => [h(Icon, { icon: 'lucide:chart-pie' }), 'Pie']),
}
</script>

<template>
  <div class="flex flex-wrap items-start gap-4">
    <Select>
      <SelectTrigger class="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">
            Apple
          </SelectItem>
          <SelectItem value="banana">
            Banana
          </SelectItem>
          <SelectItem value="blueberry">
            Blueberry
          </SelectItem>
          <SelectItem value="grapes" disabled>
            Grapes
          </SelectItem>
          <SelectItem value="pineapple">
            Pineapple
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>

    <Select>
      <SelectTrigger class="w-[180px]">
        <SelectValue placeholder="Large List" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem v-for="i in 100" :key="i" :value="`item-${i}`">
          Item {{ i }}
        </SelectItem>
      </SelectContent>
    </Select>

    <Select disabled>
      <SelectTrigger class="w-[180px]">
        <SelectValue placeholder="Disabled" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">
          Apple
        </SelectItem>
        <SelectItem value="banana">
          Banana
        </SelectItem>
        <SelectItem value="blueberry">
          Blueberry
        </SelectItem>
        <SelectItem value="grapes" disabled>
          Grapes
        </SelectItem>
        <SelectItem value="pineapple">
          Pineapple
        </SelectItem>
      </SelectContent>
    </Select>

    <Select v-model="selectedChart">
      <SelectTrigger class="w-[180px]">
        <SelectValue>
          <template v-if="selectedChart">
            <component :is="chartOptions[selectedChart]" />
          </template>
          <template v-else>
            <Icon icon="lucide:circle-dashed" class="text-muted-foreground" />
            With Icon
          </template>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectItem v-for="(children, value) of chartOptions" :key="value" :value>
          <component :is="children" />
        </SelectItem>
      </SelectContent>
    </Select>
  </div>
</template>
