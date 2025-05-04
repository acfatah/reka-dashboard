<template>
  <Card>
    <CardHeader>
      <CardTitle>Is this an image?</CardTitle>
      <CardDescription>This is a card with an image.</CardDescription>
    </CardHeader>
    <CardContent class="px-0">
      <img
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        alt="Photo by Drew Beamer"
        class="aspect-video object-cover"
        :width="500"
        :height="500"
      >
    </CardContent>
    <CardFooter class="flex items-center gap-2">
      <Badge variant="outline">
        <BedIcon /> 4
      </Badge>
      <Badge variant="outline">
        <BathIcon /> 2
      </Badge>
      <Badge variant="outline">
        <LandPlotIcon /> 350m²
      </Badge>
      <div class="ml-auto font-medium tabular-nums">
        $135,000
      </div>
    </CardFooter>
  </Card>
</template>
