<template>
  <Alert>
    <Iconify icon="lucide:alert-circle" class="size-4" />
    <AlertTitle class-name="max-w-[calc(100%-4rem)] overflow-ellipsis">
      The selected emails have been marked as spam.
    </AlertTitle>
    <Button
      size="sm"
      variant="outline"
      class-name="absolute top-2.5 right-3 h-6 shadow-none"
    >
      Undo
    </Button>
  </Alert>
</template>
