<template>
  <AlertDialog>
    <AlertDialogTrigger as-child>
      <Button variant="outline">
        Show Dialog
      </Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel
          :class="cn(
            'border-gray-300 bg-transparent text-gray-800 hover:border-gray-400',
            'dark:text-gray-100 dark:bg-transparent',
          )"
        >
          Cancel
        </AlertDialogCancel>
        <AlertDialogAction
          variant="secondary"
          :class="cn(
            'border border-green-500 bg-background',
            'text-green-500',
            'hover:bg-green-500/20',
            'dark:border-green-600 dark:hover:bg-green-600/20',
          )"
        >
          Continue
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>
