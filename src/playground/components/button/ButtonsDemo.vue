<template>
  <div class="flex flex-col gap-6">
    <div class="flex flex-wrap items-center gap-2 md:flex-row">
      <Button>Button</Button>
      <Button variant="outline">
        Outline
      </Button>
      <Button variant="ghost">
        Ghost
      </Button>
      <Button variant="destructive">
        Destructive
      </Button>
      <Button variant="secondary">
        Secondary
      </Button>
      <Button variant="link">
        Link
      </Button>
      <Button variant="outline">
        <Icon icon="lucide:send" /> Send
      </Button>
      <Button variant="outline">
        <Icon icon="lucide:arrow-right" /> Learn More
      </Button>
      <Button disabled variant="outline">
        <Icon icon="lucide:loader-2" class="animate-spin" />
        Please wait
      </Button>
    </div>
    <div class="flex flex-wrap items-center gap-2 md:flex-row">
      <Button size="sm">
        Small
      </Button>
      <Button variant="outline" size="sm">
        Outline
      </Button>
      <Button variant="ghost" size="sm">
        Ghost
      </Button>
      <Button variant="destructive" size="sm">
        Destructive
      </Button>
      <Button variant="secondary" size="sm">
        Secondary
      </Button>
      <Button variant="link" size="sm">
        Link
      </Button>
      <Button variant="outline" size="sm">
        <Icon icon="lucide:send" /> Send
      </Button>
      <Button variant="outline" size="sm">
        <Icon icon="lucide:arrow-right" /> Learn More
      </Button>
      <Button disabled size="sm" variant="outline">
        <Icon icon="lucide:loader-2" class="animate-spin" />
        Please wait
      </Button>
    </div>
    <div class="flex flex-wrap items-center gap-2 md:flex-row">
      <Button size="lg">
        Large
      </Button>
      <Button variant="outline" size="lg">
        Outline
      </Button>
      <Button variant="ghost" size="lg">
        Ghost
      </Button>
      <Button variant="destructive" size="lg">
        Destructive
      </Button>
      <Button variant="secondary" size="lg">
        Secondary
      </Button>
      <Button variant="link" size="lg">
        Link
      </Button>
      <Button variant="outline" size="lg">
        <Icon icon="lucide:send" /> Send
      </Button>
      <Button variant="outline" size="lg">
        <Icon icon="lucide:arrow-right" /> Learn More
      </Button>
      <Button disabled size="lg" variant="outline">
        <Icon icon="lucide:loader-2" class="animate-spin" />
        Please wait
      </Button>
    </div>
  </div>
</template>
