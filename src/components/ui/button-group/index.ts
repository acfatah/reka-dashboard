import { cva } from 'class-variance-authority'

export { default as ButtonGroup } from './ButtonGroup.vue'
export { default as ButtonGroupItem } from './ButtonGroupItem.vue'

export const buttonGroupVariants = cva(
  [
    'inline-flex items-center justify-center whitespace-nowrap transition-colors',
    'text-sm font-medium cursor-pointer',
    'first:rounded-l-[var(--radius)] last:rounded-r-[var(--radius)]',
    'focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none',
    'data-[orientation=vertical]:first:rounded-tr-[var(--radius)] data-[orientation=vertical]:first:rounded-bl-none data-[orientation=vertical]:last:rounded-tr-none data-[orientation=vertical]:last:rounded-bl-[var(--radius)]',
    'disabled:pointer-events-none disabled:opacity-50',
  ],

  {
    variants: {
      variant: {
        default: [
          'bg-secondary text-secondary-foreground shadow hover:bg-secondary/80',
          'data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:hover:bg-primary/90',
        ],

        outline: [
          'bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
          'data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:hover:bg-primary/90',
        ],
      },

      size: {
        xs: 'h-7 px-2',
        sm: 'h-8 px-3 text-xs',
        md: 'h-9 px-4 py-2',
        lg: 'h-10 px-8',
        icon: 'size-9',
      },

      orientation: {
        horizontal: 'flex-row',
        vertical: 'flex-col',
      },
    },

    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
)
