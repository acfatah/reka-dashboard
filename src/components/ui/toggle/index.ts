import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export { default as Toggle } from './Toggle.vue'

export const toggleVariants = cva(
  [
    'inline-flex w-min items-center justify-center gap-2',
    'rounded-md outline-none',
    'text-sm font-medium whitespace-nowrap',
    'transition-[color,box-shadow]',
    'hover:bg-muted hover:text-muted-foreground',
    'focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50',
    'disabled:pointer-events-none disabled:opacity-50',
    'aria-invalid:border-destructive aria-invalid:ring-destructive/20',
    'data-[state=on]:bg-accent data-[state=on]:text-accent-foreground',
    'dark:aria-invalid:ring-destructive/40',
    `[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,
  ],

  {
    variants: {
      variant: {
        default: 'bg-transparent',
        outline:
          'border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground',
      },

      size: {
        sm: 'h-8 px-1.5 min-w-8',
        md: 'h-9 px-2 min-w-9',
        lg: 'h-10 px-2.5 min-w-10',
      },
    },

    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
)

export type ToggleVariants = VariantProps<typeof toggleVariants>
