<script setup lang="ts">
// TODO: Remove the story args
const storyArgs = useAttrs()
</script>

<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger as-child>
        <Button variant="outline">
          Hover
        </Button>
      </TooltipTrigger>

      <TooltipContent :side="storyArgs.side">
        <p>Add to library</p>
        <TooltipArrow />
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
