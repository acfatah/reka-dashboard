<template>
  <div className="flex flex-col items-center gap-2">
    <div class="flex w-full flex-wrap gap-2">
      <Badge>Badge</Badge>

      <Badge variant="secondary">
        Secondary
      </Badge>

      <Badge variant="destructive">
        Destructive
      </Badge>

      <Badge variant="outline">
        Outline
      </Badge>

      <Badge variant="outline">
        <Icon icon="lucide:check" />
        Badge
      </Badge>

      <Badge variant="destructive">
        <Icon icon="lucide:alert-circle" />
        Alert
      </Badge>

      <Badge class="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">
        8
      </Badge>

      <Badge
        class="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
        variant="destructive"
      >
        99
      </Badge>

      <Badge
        class="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
        variant="outline"
      >
        20+
      </Badge>
    </div>

    <div class="flex w-full flex-wrap gap-2">
      <Badge as-child>
        <a href="#">
          Link <Icon icon="lucide:arrow-right" />
        </a>
      </Badge>

      <Badge as-child variant="secondary">
        <a href="#">
          Link <Icon icon="lucide:arrow-right" />
        </a>
      </Badge>

      <Badge as-child variant="destructive">
        <a href="#">
          Link <Icon icon="lucide:arrow-right" />
        </a>
      </Badge>

      <Badge as-child variant="outline">
        <a href="#">
          Link <Icon icon="lucide:arrow-right" />
        </a>
      </Badge>
    </div>
  </div>
</template>
