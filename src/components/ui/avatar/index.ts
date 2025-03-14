import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export { default as Avatar } from './Avatar.vue'
export { default as AvatarFallback } from './AvatarFallback.vue'
export { default as AvatarImage } from './AvatarImage.vue'

export const AvatarSize = {
  sm: 'size-10 text-xs',
  base: 'size-16 text-2xl',
  lg: 'size-32 text-5xl',
}

export const AvatarShape = {
  circle: 'rounded-full',
  square: 'rounded-md',
}

export const avatarVariant = cva(
  [
    'inline-flex shrink-0 select-none items-center justify-center overflow-hidden',
    'bg-secondary font-normal text-foreground',
  ],
  {
    variants: {
      size: AvatarSize,
      shape: AvatarShape,
    },

    defaultVariants: {
      size: 'base',
      shape: 'circle',
    },
  },
)

export type AvatarVariants = VariantProps<typeof avatarVariant>
