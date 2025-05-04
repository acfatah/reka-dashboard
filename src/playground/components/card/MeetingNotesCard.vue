<template>
  <Card>
    <CardHeader>
      <CardTitle>Meeting Notes</CardTitle>
      <CardDescription>
        Transcript from the meeting with the client.
      </CardDescription>
    </CardHeader>
    <CardContent class="text-sm">
      <p>
        Client requested dashboard redesign with focus on mobile
        responsiveness.
      </p>
      <ol className="mt-4 flex list-decimal flex-col gap-2 pl-6">
        <li>New analytics widgets for daily/weekly metrics</li>
        <li>Simplified navigation menu</li>
        <li>Dark mode support</li>
        <li>Timeline: 6 weeks</li>
        <li>Follow-up meeting scheduled for next Tuesday</li>
      </ol>
    </CardContent>
    <CardFooter>
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
    </CardFooter>
  </Card>
</template>
