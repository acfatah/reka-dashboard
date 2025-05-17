<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<template>
  <Dialog>
    <DialogTrigger as-child>
      <Button variant="outline">
        Scrollable Content
      </Button>
    </DialogTrigger>
    <DialogContent class="flex flex-col max-h-[90dvh] sm:max-w-lg">
      <DialogHeader>
        <DialogTitle>Scrollable Content</DialogTitle>
        <DialogDescription>
          This is a dialog with scrollable content.
        </DialogDescription>
      </DialogHeader>
      <div class="flex-grow -mx-6 overflow-y-auto pl-6 pr-4 text-sm">
        <h4 class="mb-4 text-lg leading-none font-medium">
          Lorem Ipsum
        </h4>
        <template v-for="i in 20" :key="i">
          <p class="mb-4 leading-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </template>
      </div>
      <DialogFooter>
        <DialogClose :as="Button" variant="outline">
          Close
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
