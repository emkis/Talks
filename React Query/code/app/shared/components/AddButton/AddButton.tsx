import type * as React from 'react'
import { PlusIcon } from '@radix-ui/react-icons'
import { cn } from '@shared/utilities/cn'

type AddButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export function AddButton(props: AddButtonProps) {
  const { className, ...restProps } = props

  return (
    <button
      type="button"
      className={cn(
        'grid h-7 w-7 place-content-center rounded-lg border-2 border-slate-600 text-xs text-white focus:outline-none focus-visible:ring',
        className
      )}
      {...restProps}
    >
      <span className="sr-only">Add project</span>
      <PlusIcon className="fill-current" width={20} height={20} aria-hidden />
    </button>
  )
}
