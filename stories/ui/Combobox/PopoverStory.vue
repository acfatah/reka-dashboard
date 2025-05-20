<script setup lang="ts">
interface StatusRecord {
  label: string
  value: string
}
const statuses: StatusRecord[] = [
  { label: 'Backlog', value: 'backlog' },
  { label: 'Todo', value: 'todo' },
  { label: 'In Progress', value: 'in progress' },
  { label: 'Done', value: 'done' },
  { label: 'Canceled', value: 'canceled' },
]

const selectedStatus: Ref<StatusRecord | null> = ref(null)
</script>

<template>
  <div class="flex items-center space-x-4">
    <p class="text-sm text-muted-foreground">
      Status
    </p>

    <Combobox v-model="selectedStatus" by="label">
      <ComboboxAnchor as-child>
        <ComboboxTrigger as-child>
          <Button
            variant="outline"
            size="sm"
            class="w-[150px] justify-start"
          >
            <template v-if="selectedStatus">
              {{ selectedStatus?.label }}
            </template>
            <template v-else>
              + Set status
            </template>
          </Button>
        </ComboboxTrigger>
      </ComboboxAnchor>

      <ComboboxList align="start">
        <ComboboxInput placeholder="Change status..." />

        <ComboboxEmpty>
          No status found.
        </ComboboxEmpty>

        <ComboboxGroup>
          <ComboboxItem
            v-for="status in statuses"
            :key="status.value"
            :value="status"
          >
            {{ status.label }}

            <ComboboxItemIndicator>
              <Icon icon="lucide:check" />
            </ComboboxItemIndicator>
          </ComboboxItem>
        </ComboboxGroup>
      </ComboboxList>
    </Combobox>
  </div>
</template>
