<template>
  <header class="sticky top-0 z-10 flex h-16 w-full shrink-0 items-center gap-2 bg-background/100 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
    <div class="flex w-full items-center gap-2 px-2">
      <SidebarTrigger class="-ml-1" />
      <Separator orientation="vertical" class="mr-2 h-4" />
      <Placeholder class="h-8 w-64" />
      <div class="ml-auto flex gap-x-2">
        <ThemeSelector />
        <DarkModeToggle />
        <DarkModeDropdown />
      </div>
    </div>
  </header>
</template>
