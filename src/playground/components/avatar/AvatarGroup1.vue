<template>
  <div class="flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background *:data-[slot=avatar]:grayscale">
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
