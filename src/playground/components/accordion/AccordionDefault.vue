<script setup lang="ts">
const DEFAULT_VALUE = 'item-1'

interface AccordionItemData {
  value: string
  title: string
  content: string
}

const accordionItems: AccordionItemData[] = [
  {
    value: 'item-1',
    title: 'Is it accessible?',
    content: 'Yes. It adheres to the WAI-ARIA design pattern.',
  },
  {
    value: 'item-2',
    title: 'Is it unstyled?',
    content: 'Yes. It\'s unstyled by default, giving you freedom over the look and feel.',
  },
  {
    value: 'item-3',
    title: 'Is it animated?',
    content: ' Yes. It\'s animated by default, but you can disable it if you prefer.',
  },
  {
    value: 'item-4',
    title: `What are the key considerations when implementing a comprehensive
            enterprise-level authentication system?`,
    content: `Implementing a robust enterprise authentication system requires
              careful consideration of multiple factors. This includes secure
              password hashing and storage, multi-factor authentication (MFA)
              implementation, session management, OAuth2 and SSO integration,
              regular security audits, rate limiting to prevent brute force
              attacks, and maintaining detailed audit logs. Additionally,
              you'll need to consider scalability, performance impact, and
              compliance with relevant data protection regulations such as GDPR or
              HIPAA.`,
  },
  {
    value: 'item-5',
    title: `How does modern distributed system architecture handle eventual
            consistency and data synchronization across multiple regions?`,
    content: `Modern distributed systems employ various strategies to maintain
              data consistency across regions. This often involves using
              techniques like CRDT (Conflict-Free Replicated Data Types), vector
              clocks, and gossip protocols. Systems might implement event sourcing
              patterns, utilize message queues for asynchronous updates, and
              employ sophisticated conflict resolution strategies. Popular
              solutions like Amazon's DynamoDB and Google's Spanner
              demonstrate different approaches to solving these challenges,
              balancing between consistency, availability, and partition tolerance
              as described in the CAP theorem.`,
  },
]
</script>

<template>
  <Accordion type="single" class="w-full" collapsible :default-value="DEFAULT_VALUE">
    <AccordionItem v-for="item in accordionItems" :key="item.value" :value="item.value">
      <AccordionTrigger>{{ item.title }}</AccordionTrigger>
      <AccordionContent>
        {{ item.content }}
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</template>
