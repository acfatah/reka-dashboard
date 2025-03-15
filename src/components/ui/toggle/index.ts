import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export { default as Toggle } from './Toggle.vue'

export const toggleVariants = cva(
  [
    'inline-flex w-min items-center justify-center gap-2 rounded-md',
    'text-sm font-medium',
    'transition-colors',
    'cursor-pointer hover:bg-muted hover:text-muted-foreground',
    'focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none',
    'data-[state=on]:bg-accent data-[state=on]:text-accent-foreground',
    'disabled:pointer-events-none disabled:opacity-50',
  ],
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        outline:
          'border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground',
      },

      size: {
        sm: 'h-8 px-2',
        md: 'h-9 px-3',
        lg: 'h-10 px-3',
      },
    },

    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
)

export type ToggleVariants = VariantProps<typeof toggleVariants>
