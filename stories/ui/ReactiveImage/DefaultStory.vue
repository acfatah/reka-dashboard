<template>
  <UseImage src="https://placehold.co/320x240">
    <template #loading>
      <div class="flex h-[240px] w-[320px] items-center justify-center bg-neutral-100 dark:bg-neutral-900">
        <Iconify icon="lucide:loader-2" class="animate-spin" />
      </div>
    </template>

    <template #error>
      <div class="flex h-[240px] w-[320px] items-center justify-center bg-neutral-100 dark:bg-neutral-900">
        <Iconify icon="lucide:alert-triangle" class="size-6" />
      </div>
    </template>
  </UseImage>
</template>
