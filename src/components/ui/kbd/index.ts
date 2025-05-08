import { cva } from 'class-variance-authority'

export { default as Kbd } from './Kbd.vue'

export const kbdVariants = cva(
  [
    'pointer-events-none inline-flex items-center gap-1 px-1.5',
    'rounded border bg-muted opacity-100',
    'font-mono font-medium text-muted-foreground select-none',
  ],
  {
    variants: {
      size: {
        xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-md',
        lg: 'text-lg',
      },
    },

    defaultVariants: {
      size: 'md',
    },
  },
)
