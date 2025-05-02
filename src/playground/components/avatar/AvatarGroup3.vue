<template>
  <div
    :class="cn(
      'flex -space-x-2 hover:space-x-1 ',
      '*:data-[slot=avatar]:size-12 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background *:data-[slot=avatar]:grayscale',
      '*:data-[slot=avatar]:transition-all *:data-[slot=avatar]:duration-300 *:data-[slot=avatar]:ease-in-out',
    )"
  >
    <Avatar>
      <AvatarImage src="/example/avatar/01.png" alt="mighty.tools" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarImage
        src="https://mighty.tools/mockmind-api/content/human/122.jpg"
        alt="@mighty.tools"
      />
      <AvatarFallback>LR</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarImage
        src="https://mighty.tools/mockmind-api/content/human/104.jpg"
        alt="@mighty.tools"
      />
      <AvatarFallback>ER</AvatarFallback>
    </Avatar>
  </div>
</template>
