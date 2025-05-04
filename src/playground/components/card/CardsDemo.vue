<template>
  <div class="flex w-full flex-wrap items-start gap-8 md:*:data-[slot=card]:basis-1/4">
    <Card>
      <CardContent class="text-sm">
        Content Only
      </CardContent>
    </Card>
    <Card>
      <CardHeader>
        <CardTitle>Header Only</CardTitle>
        <CardDescription>
          This is a card with a header and a description.
        </CardDescription>
      </CardHeader>
    </Card>
    <Card>
      <CardHeader>
        <CardTitle>Header and Content</CardTitle>
        <CardDescription>
          This is a card with a header and a content.
        </CardDescription>
      </CardHeader>
      <CardContent class="text-sm">
        Content
      </CardContent>
    </Card>
    <Card>
      <CardFooter class="text-sm">
        Footer Only
      </CardFooter>
    </Card>
    <Card>
      <CardHeader>
        <CardTitle>Header + Footer</CardTitle>
        <CardDescription>
          This is a card with a header and a footer.
        </CardDescription>
      </CardHeader>
      <CardFooter class="text-sm">
        Footer
      </CardFooter>
    </Card>
    <Card>
      <CardContent class="text-sm">
        Content
      </CardContent>
      <CardFooter class="text-sm">
        Footer
      </CardFooter>
    </Card>
    <Card>
      <CardHeader>
        <CardTitle>Header + Footer</CardTitle>
        <CardDescription>
          This is a card with a header and a footer.
        </CardDescription>
      </CardHeader>
      <CardContent class="text-sm">
        Content
      </CardContent>
      <CardFooter class="text-sm">
        Footer
      </CardFooter>
    </Card>
  </div>
</template>
