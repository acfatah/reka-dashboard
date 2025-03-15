<script setup lang="ts">
interface Status {
  label: string
  value: string
}
const statuses: Status[] = [
  { label: 'Backlog', value: 'backlog' },
  { label: 'Todo', value: 'todo' },
  { label: 'In Progress', value: 'in progress' },
  { label: 'Done', value: 'done' },
  { label: 'Canceled', value: 'canceled' },
]

const open: Ref<boolean> = ref(false)
const selectedStatus: Ref<Status | null> = ref(null)
</script>

<template>
  <div class="flex items-center space-x-4">
    <p class="text-sm text-muted-foreground">
      Status
    </p>
    <Popover v-model:open="open">
      <PopoverTrigger as-child>
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
      </PopoverTrigger>
      <PopoverContent class="p-0" side="right" align="start">
        <Command>
          <CommandInput placeholder="Change status..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              <CommandItem
                v-for="status in statuses"
                :key="status.value"
                :value="status.value"
                @select="() => {
                  selectedStatus = status
                  open = false
                }"
              >
                {{ status.label }}
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  </div>
</template>
