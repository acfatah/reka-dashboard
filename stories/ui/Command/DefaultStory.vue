<script setup lang="ts">
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command'
import { Iconify } from '@/components/ui/icon'
</script>

<template>
  <Command class="max-w-[450px] rounded-lg border shadow-md">
    <CommandInput placeholder="Type a command or search..." />
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Suggestions">
        <CommandItem value="Calendar">
          <Iconify icon="radix-icons:calendar" class="mr-2 size-4" />
          <span>Calendar</span>
        </CommandItem>
        <CommandItem value="Search Emoji">
          <Iconify icon="radix-icons:face" class="mr-2 size-4" />
          <span>Search Emoji</span>
        </CommandItem>
        <CommandItem value="Launch">
          <Iconify icon="radix-icons:rocket" class="mr-2 size-4" />
          <span>Launch</span>
        </CommandItem>
      </CommandGroup>
      <CommandSeparator />
      <CommandGroup heading="Settings">
        <CommandItem value="Profile">
          <Iconify icon="radix-icons:person" class="mr-2 size-4" />
          <span>Profile</span>
          <CommandShortcut>⌘P</CommandShortcut>
        </CommandItem>
        <CommandItem value="Mail">
          <Iconify icon="radix-icons:envelope-closed" class="mr-2 size-4" />
          <span>Mail</span>
          <CommandShortcut>⌘B</CommandShortcut>
        </CommandItem>
        <CommandItem value="Settings">
          <Iconify icon="radix-icons:gear" class="mr-2 size-4" />
          <span>Settings</span>
          <CommandShortcut>⌘S</CommandShortcut>
        </CommandItem>
      </CommandGroup>
    </CommandList>
  </Command>
</template>
