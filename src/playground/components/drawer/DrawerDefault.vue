<script setup lang="ts">
import { createReusableTemplate, useMediaQuery } from '@vueuse/core'
import { ref } from 'vue'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

// Reuse `form` section
const [UseTemplate, GridForm] = createReusableTemplate()
const isDesktop = useMediaQuery('(min-width: 768px)')

const isOpen = ref(false)
</script>

<template>
  <UseTemplate>
    <form class="grid items-start gap-4 px-4">
      <div class="grid gap-2">
        <Label html-for="email">Email</Label>
        <Input id="email" type="email" default-value="shadcn@example.com" />
      </div>
      <div class="grid gap-2">
        <Label html-for="username">Username</Label>
        <Input id="username" default-value="@shadcn" />
      </div>
      <Button type="submit" class="w-full">
        Save changes
      </Button>
    </form>
  </UseTemplate>

  <Dialog v-if="isDesktop" v-model:open="isOpen">
    <DialogTrigger as-child>
      <Button variant="outline">
        Responsive Dialog
      </Button>
    </DialogTrigger>
    <DialogContent class="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Edit profile</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when you're done.
        </DialogDescription>
      </DialogHeader>
      <GridForm />
    </DialogContent>
  </Dialog>

  <Drawer v-else v-model:open="isOpen">
    <DrawerTrigger as-child>
      <Button variant="outline">
        Edit Profile
      </Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader class="text-left">
        <DrawerTitle>Edit profile</DrawerTitle>
        <DrawerDescription>
          Make changes to your profile here. Click save when you're done.
        </DrawerDescription>
      </DrawerHeader>
      <GridForm />
      <DrawerFooter class="pt-2">
        <DrawerClose as-child>
          <Button variant="outline" class="w-full">
            Cancel
          </Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
</template>
