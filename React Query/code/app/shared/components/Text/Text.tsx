import type { WithChildren } from '@shared/types/react'
import { cn } from '@shared/utilities/cn'

type TextProps = WithChildren<{
  className?: string
}>

export function Text({ className, children }: TextProps) {
  return <p className={cn('text-2xl leading-normal text-gray-800', className)}>{children}</p>
}
