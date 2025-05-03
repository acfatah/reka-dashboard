<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" size="icon">
        <Iconify icon="lucide:more-horizontal" class="size-4" />
        <span class="sr-only">Toggle menu</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="start">
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <Iconify icon="lucide:pencil" />
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Iconify icon="lucide:share" />
          Share
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <Iconify icon="lucide:trash-2" />
          Delete
        </DropdownMenuItem>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
