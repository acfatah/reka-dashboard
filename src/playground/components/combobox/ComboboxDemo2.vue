<script setup lang="ts">
interface UserRecord {
  id: number
  username: string
  image: string
}

const users: UserRecord[] = [
  {
    id: 1,
    username: 'uifaces.co',
    image: 'https://mighty.tools/mockmind-api/content/human/104.jpg',
  },
  {
    id: 2,
    username: 'uifaces-122',
    image: 'https://mighty.tools/mockmind-api/content/human/122.jpg',
  },
  {
    id: 3,
    username: 'avatar-01',
    image: '/example/avatar/01.png',
  },
]

const selectedUser = ref<UserRecord | null>(null)
</script>

<template>
  <Combobox v-model="selectedUser">
    <ComboboxAnchor as-child>
      <ComboboxTrigger as-child>
        <Button variant="outline" class="w-full min-w-[200px] justify-between px-2">
          <template v-if="selectedUser">
            <div class="flex items-center gap-2">
              <Avatar class="size-5">
                <AvatarImage
                  :src="selectedUser.image"
                  :alt="selectedUser.username"
                />
                <AvatarFallback>{{ selectedUser.username[0] }}</AvatarFallback>
              </Avatar>
              {{ selectedUser.username }}
            </div>
          </template>
          <template v-else>
            Select user...
          </template>
          <Icon
            icon="lucide:chevrons-up-down"
            class="ml-2 size-4 shrink-0 opacity-50"
          />
        </Button>
      </ComboboxTrigger>
    </ComboboxAnchor>

    <ComboboxList align="start">
      <ComboboxInput placeholder="Search user..." />

      <ComboboxEmpty>
        No user found.
      </ComboboxEmpty>

      <ComboboxGroup>
        <ComboboxItem
          v-for="currentUser in users"
          :key="currentUser.id"
          :value="currentUser"
        >
          <div class="flex items-center gap-2">
            <Avatar class="size-5">
              <AvatarImage
                :src="currentUser.image"
                :alt="currentUser.username"
              />
              <AvatarFallback>{{ currentUser.username[0] }}</AvatarFallback>
            </Avatar>
            {{ currentUser.username }}
          </div>

          <ComboboxItemIndicator>
            <Icon icon="lucide:check" />
          </ComboboxItemIndicator>
        </ComboboxItem>
      </ComboboxGroup>
      <ComboboxSeparator />
      <ComboboxGroup>
        <ComboboxItem
          class="justify-start"
          :value="undefined"
          @select.prevent
        >
          <Icon icon="lucide:plus-circle" class="size-4" />
          Create user
        </ComboboxItem>
      </ComboboxGroup>
    </ComboboxList>
  </Combobox>
</template>
