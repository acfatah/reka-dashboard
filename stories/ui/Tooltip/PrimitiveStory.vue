<script setup lang="ts">
const storyArgs = useAttrs()
</script>

<template>
  <TooltipProvider>
    <TooltipRoot>
      <TooltipTrigger as-child>
        <Button variant="outline">
          Hover
        </Button>
      </TooltipTrigger>

      <TooltipContent :side="storyArgs.side">
        <p>Add to library</p>
        <TooltipArrow />
      </TooltipContent>
    </TooltipRoot>
  </TooltipProvider>
</template>
