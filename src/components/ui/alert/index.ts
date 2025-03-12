import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export { default as Alert } from './Alert.vue'
export { default as AlertDescription } from './AlertDescription.vue'
export { default as AlertTitle } from './AlertTitle.vue'

export const alertVariants = cva(
  [
    'relative w-full rounded-lg border px-4 py-3',
    'text-sm',
    '[&>svg]:absolute [&>svg]:top-4 [&>svg]:left-4 [&>svg]:text-foreground',
    '[&>svg+div]:translate-y-[-3px] [&>svg~*]:pl-7',
  ],
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground',
        destructive:
          'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export type AlertVariants = VariantProps<typeof alertVariants>
