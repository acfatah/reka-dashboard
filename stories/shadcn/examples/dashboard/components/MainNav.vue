<template>
  <nav
    :class="cn(
      'hidden items-center space-x-4 md:flex lg:space-x-6',
      $attrs.class ?? '',
    )"
  >
    <a
      href="/examples/dashboard"
      class="text-sm font-medium transition-colors hover:text-primary"
    >
      Overview
    </a>
    <a
      href="/examples/dashboard"
      class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
    >
      Customers
    </a>
    <a
      href="/examples/dashboard"
      class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
    >
      Products
    </a>
    <a
      href="/examples/dashboard"
      class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
    >
      Settings
    </a>
  </nav>
</template>
