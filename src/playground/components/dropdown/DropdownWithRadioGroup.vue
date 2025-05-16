<script setup lang="ts">
const position = ref('bottom')
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="outline">
        Radio Group
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="start" class="w-56">
      <DropdownMenuLabel inset>
        Panel Position
      </DropdownMenuLabel>
      <DropdownMenuGroup>
        <DropdownMenuRadioGroup v-model="position">
          <DropdownMenuRadioItem value="top">
            Top
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">
            Bottom
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right" disabled>
            Right
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
