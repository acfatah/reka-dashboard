<template>
  <Tooltip>
    <template #content>
      <div class="flex items-center">
        <Iconify icon="lucide:circle-help" class="mr-1 size-4" />
        <span>Elements from slot</span>
      </div>
    </template>

    <Button variant="outline">
      Hover
    </Button>
  </Tooltip>
</template>
