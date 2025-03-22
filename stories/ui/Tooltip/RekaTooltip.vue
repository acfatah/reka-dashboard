<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { TooltipArrow, TooltipContent, TooltipPortal, TooltipProvider, TooltipRoot, TooltipTrigger } from 'reka-ui'
</script>

<template>
  <TooltipProvider>
    <TooltipRoot>
      <TooltipTrigger
        class="text-grass11 hover:bg-stone-50 inline-flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white shadow-sm border outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
      >
        <Icon icon="radix-icons:plus" />
      </TooltipTrigger>
      <TooltipPortal>
        <TooltipContent
          class="text-grass11 rounded-md border bg-white px-[15px] py-[10px] text-sm leading-none shadow-sm will-change-[transform,opacity] select-none data-[state=delayed-open]:data-[side=bottom]:animate-slide-up-and-fade data-[state=delayed-open]:data-[side=left]:animate-slide-right-and-fade data-[state=delayed-open]:data-[side=right]:animate-slide-left-and-fade data-[state=delayed-open]:data-[side=top]:animate-slide-down-and-fade"
          :side-offset="5"
        >
          Add to library
          <TooltipArrow
            class="fill-white stroke-gray-200"
            :width="12"
            :height="6"
          />
        </TooltipContent>
      </TooltipPortal>
    </TooltipRoot>
  </TooltipProvider>
</template>
