<script setup lang="ts">
import type { SheetVariants } from '@/components/ui/sheet'

const SHEET_SIDES: SheetVariants['side'][] = ['top', 'right', 'bottom', 'left']
const name = ref('')
const username = ref('')
</script>

<template>
  <div class="grid w-72 grid-cols-2 gap-2">
    <Sheet v-for="side in SHEET_SIDES" :key="(side as string)">
      <SheetTrigger as-child>
        <Button variant="outline" class="w-32">
          {{ side }}
        </Button>
      </SheetTrigger>
      <SheetContent :side="side">
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div class="grid gap-4 px-6 py-4">
          <div class="grid grid-cols-4 items-center gap-4">
            <Label for="name" class="text-right">Name</Label>
            <Input id="name" v-model="name" class="col-span-3" />
          </div>
          <div class="grid grid-cols-4 items-center gap-4">
            <Label for="username" class="text-right">Username</Label>
            <Input id="username" v-model="username" class="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose as-child>
            <Button type="submit">
              Save changes
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  </div>
</template>
