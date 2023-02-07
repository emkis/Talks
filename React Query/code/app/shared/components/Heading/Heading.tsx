import type { WithChildren } from '@shared/types/react'
import { cn } from '@shared/utilities/cn'

type HeadingProps = WithChildren<{
  className?: string
}>

export function Heading({ className, children }: HeadingProps) {
  return <h1 className={cn('text-5xl font-bold text-black', className)}>{children}</h1>
}
