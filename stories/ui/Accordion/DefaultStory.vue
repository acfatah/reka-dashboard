<script setup lang="ts">
const DEFAULT_VALUE = 'item-1'

interface AccordionItemData {
  value: string
  title: string
  content: string
}

const accordionItems: AccordionItemData[] = [
  { value: 'item-1', title: 'Is it accessible?', content: 'Yes. It adheres to the WAI-ARIA design pattern.' },
  { value: 'item-2', title: 'Is it unstyled?', content: 'Yes. It\'s unstyled by default, giving you freedom over the look and feel.' },
  { value: 'item-3', title: 'Can it be animated?', content: 'Yes! You can use the transition prop to configure the animation.' },
]
</script>

<template>
  <AccordionRoot type="single" class="w-full" collapsible :default-value="DEFAULT_VALUE">
    <AccordionItem v-for="item in accordionItems" :key="item.value" :value="item.value">
      <AccordionTrigger>{{ item.title }}</AccordionTrigger>
      <AccordionContent>
        {{ item.content }}
      </AccordionContent>
    </AccordionItem>
  </AccordionRoot>
</template>
