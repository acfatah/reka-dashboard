<script setup lang="ts">
// See the `payment-columns.js` file to see how columns are defined.
import columns from './DefaultDataTable/payment-columns.ts'

const data = ref<Record<string, any>[]>([])
const isLoading = ref(false)

async function fetchData() {
  isLoading.value = true

  // In a real implementation, the data may come from an API request.
  const payments = await import('./data/payments.ts').then(m => m.data)
  await new Promise(resolve => setTimeout(resolve, 1000))

  isLoading.value = false

  return payments
}

onMounted(async () => {
  data.value = await fetchData()
})
</script>

<template>
  <DataTable :columns="columns" :data="data" :loading="isLoading">
    <!-- Filter Slot -->
    <template #filter="{ table }">
      <div class="flex items-center justify-end py-4">
        <Input
          class="ml-auto max-w-sm" placeholder="Filter emails..."
          :model-value="(table.getColumn('email')?.getFilterValue() as string)"
          @update:model-value=" table.getColumn('email')?.setFilterValue($event)"
        />
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button variant="outline" class="ml-1">
              <Icon icon="lucide:sliders-horizontal" class="size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuCheckboxItem
              v-for="column in table.getAllColumns().filter((column) => column.getCanHide())"
              :key="column.id"
              class="capitalize"
              :model-value="column.getIsVisible()"
              @update:model-value="(value) => {
                column.toggleVisibility(!!value)
              }"
            >
              {{ column.id }}
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </template>

    <!-- Pagination Slot -->
    <template #pagination="{ table }">
      <div class="flex items-center justify-between px-2 py-4">
        <div class="flex-1 text-sm text-muted-foreground">
          {{ table.getFilteredSelectedRowModel().rows.length }} of
          {{ table.getFilteredRowModel().rows.length }} row(s) selected.
        </div>
        <div class="flex items-center space-x-6 lg:space-x-8">
          <div class="flex items-center space-x-2">
            <p class="text-sm font-medium">
              Rows per page
            </p>
            <Select
              :model-value="`${table.getState().pagination.pageSize}`"
              @update:model-value="!!$event && table.setPageSize(Number($event))"
            >
              <SelectTrigger class="h-8 w-[70px]">
                <SelectValue :placeholder="`${table.getState().pagination.pageSize}`" />
              </SelectTrigger>
              <SelectContent side="top">
                <SelectItem v-for="pageSize in [10, 20, 30, 40, 50]" :key="pageSize" :value="`${pageSize}`">
                  {{ pageSize }}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div class="flex w-min items-center justify-center whitespace-nowrap text-sm font-medium">
            Page <Input
              type="number"
              min="1"
              class="m-1 h-8 w-16 rounded border p-1 text-right"
              :max="table.getPageCount()"
              :default-value="table.getState().pagination.pageIndex + 1"
              :model-value="table.getState().pagination.pageIndex + 1"
              @update:model-value="Number($event) < table.getPageCount()
                ? table.setPageIndex(Number($event) - 1)
                : table.setPageIndex(table.getPageCount() - 1)
              "
            /> of {{ table.getPageCount() }}
          </div>
          <div class="flex items-center space-x-2">
            <Button
              variant="outline"
              class="hidden size-8 p-0 lg:flex"
              :disabled="!table.getCanPreviousPage()"
              @click="table.setPageIndex(0)"
            >
              <span class="sr-only">Go to first page</span>
              <Icon icon="lucide:chevron-first" class="size-4" />
            </Button>
            <Button
              variant="outline"
              class="size-8 p-0"
              :disabled="!table.getCanPreviousPage()"
              @click="table.previousPage()"
            >
              <span class="sr-only">Go to previous page</span>
              <Icon icon="lucide:chevron-left" class="size-4" />
            </Button>
            <Button
              variant="outline"
              class="size-8 p-0"
              :disabled="!table.getCanNextPage()"
              @click="table.nextPage()"
            >
              <span class="sr-only">Go to next page</span>
              <Icon icon="lucide:chevron-right" class="size-4" />
            </Button>
            <Button
              variant="outline"
              class="hidden size-8 p-0 lg:flex"
              :disabled="!table.getCanNextPage()"
              @click="table.setPageIndex(table.getPageCount() - 1)"
            >
              <span class="sr-only">Go to last page</span>
              <Icon icon="lucide:chevron-last" class="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </template>
  </DataTable>
</template>
