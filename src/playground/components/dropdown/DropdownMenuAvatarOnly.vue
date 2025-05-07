<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button
        variant="outline"
        class="size-8 rounded-full border-none p-0"
      >
        <Avatar>
          <AvatarImage
            src="https://mighty.tools/mockmind-api/content/human/104.jpg"
            alt="uifaces.co"
          />
          <AvatarFallback class="rounded-lg">
            UF
          </AvatarFallback>
        </Avatar>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent
      class="w-(--reka-dropdown-menu-trigger-width) min-w-56"
      align="start"
    >
      <DropdownMenuLabel class="p-0 font-normal">
        <div class="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
          <Avatar>
            <AvatarImage
              src="https://mighty.tools/mockmind-api/content/human/104.jpg"
              alt="uifaces.co"
            />
            <AvatarFallback class="rounded-lg">
              UF
            </AvatarFallback>
          </Avatar>
          <div class="grid flex-1 text-left text-sm leading-tight">
            <span class="truncate font-semibold">uifaces.co</span>
            <span class="text-muted-foreground truncate text-xs">
              mt@example.com
            </span>
          </div>
        </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <Icon icon="lucide:sparkles" />
          Upgrade to Pro
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <Icon icon="lucide:badge-check" />
          Account
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Icon icon="lucide:credit-card" />
          Billing
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Icon icon="lucide:bell" />
          Notifications
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <Icon icon="lucide:log-out" />
        Sign Out
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
