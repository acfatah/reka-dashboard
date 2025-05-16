<template>
  <Dialog>
    <DialogTrigger as-child>
      <Button variant="outline">
        Sticky Footer
      </Button>
    </DialogTrigger>
    <DialogContent class="sm:max-w-lg">
      <DialogHeader>
        <DialogTitle>Scrollable Content</DialogTitle>
        <DialogDescription>
          This is a dialog with scrollable content.
        </DialogDescription>
      </DialogHeader>
      <div class="-mx-6 max-h-[500px] overflow-y-auto px-6 text-sm">
        <h4 class="mb-4 text-lg leading-none font-medium">
          Lorem Ipsum
        </h4>
        <p v-for="index in 10" :key="index" class="mb-4 leading-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <DialogFooter>
        <DialogClose as-child>
          <Button variant="outline">
            Close
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
