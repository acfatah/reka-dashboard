<script lang="ts" setup>
interface Zone {
  label: string
  items: Item[]
}

interface Item {
  text: string
  value: string
}

const selectGroups: Zone[] = [
  {
    label: 'North America',
    items: [
      { value: 'est', text: 'Eastern Standard Time (EST)' },
      { value: 'cst', text: 'Central Standard Time (CST)' },
      { value: 'mst', text: 'Mountain Standard Time (MST)' },
      { value: 'pst', text: 'Pacific Standard Time (PST)' },
      { value: 'akst', text: 'Alaska Standard Time (AKST)' },
      { value: 'hst', text: 'Hawaii Standard Time (HST)' },
    ],
  },
  {
    label: 'Europe & Africa',
    items: [
      { value: 'gmt', text: 'Greenwich Mean Time (GMT)' },
      { value: 'cet', text: 'Central European Time (CET)' },
      { value: 'eet', text: 'Eastern European Time (EET)' },
      { value: 'west', text: 'Western European Summer Time (WEST)' },
      { value: 'cat', text: 'Central Africa Time (CAT)' },
      { value: 'eat', text: 'East Africa Time (EAT)' },
    ],
  },
  {
    label: 'Asia',
    items: [
      { value: 'msk', text: 'Moscow Time (MSK)' },
      { value: 'ist', text: 'India Standard Time (IST)' },
      { value: 'cst_china', text: 'China Standard Time (CST)' },
      { value: 'jst', text: 'Japan Standard Time (JST)' },
      { value: 'kst', text: 'Korea Standard Time (KST)' },
      { value: 'ist_indonesia', text: 'Indonesia Central Standard Time (WITA)' },
    ],
  },
  {
    label: 'Australia & Pacific',
    items: [
      { value: 'awst', text: 'Australian Western Standard Time (AWST)' },
      { value: 'acst', text: 'Australian Central Standard Time (ACST)' },
      { value: 'aest', text: 'Australian Eastern Standard Time (AEST)' },
      { value: 'nzst', text: 'New Zealand Standard Time (NZST)' },
      { value: 'fjt', text: 'Fiji Time (FJT)' },
    ],
  },
  {
    label: 'South America',
    items: [
      { value: 'art', text: 'Argentina Time (ART)' },
      { value: 'bot', text: 'Bolivia Time (BOT)' },
      { value: 'brt', text: 'Brasilia Time (BRT)' },
      { value: 'clt', text: 'Chile Standard Time (CLT)' },
    ],
  },
]
</script>

<template>
  <Select>
    <SelectTrigger class="w-[280px]">
      <SelectValue placeholder="Select a timezone" />
    </SelectTrigger>
    <SelectContent>
      <template v-for="group in selectGroups" :key="group.label">
        <SelectGroup>
          <SelectLabel>{{ group.label }}</SelectLabel>
          <SelectItem v-for="item in group.items" :key="item.value" :value="item.value">
            {{ item.text }}
          </SelectItem>
        </SelectGroup>
      </template>
    </SelectContent>
  </Select>
</template>
