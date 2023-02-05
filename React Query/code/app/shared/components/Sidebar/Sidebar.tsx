import type { WithChildren } from '@shared/types/react'
import { Slot } from '@radix-ui/react-slot'

export function Title({ children }: WithChildren) {
  return (
    <div className="flex items-center justify-items-center gap-3 pb-5">
      <div className="h-3 w-3 rounded-full bg-white" aria-hidden />
      <span className="block text-xl font-bold text-white">{children}</span>
    </div>
  )
}

function ItemsGroup({ children }: WithChildren) {
  return <nav className="grid gap-1">{children}</nav>
}

type ItemProps = WithChildren<{ asChild?: boolean }>

function Item({ asChild, children }: ItemProps) {
  const Element = asChild ? Slot : 'button'

  return (
    <Element className="flex w-full flex-nowrap items-center justify-start gap-4 rounded-lg border-2 border-transparent p-2.5 text-gray-300 transition-colors hover:border-slate-600 hover:bg-slate-700 hover:text-white focus:outline-none focus-visible:text-white focus-visible:ring">
      {children}
    </Element>
  )
}
function Root({ children }: WithChildren) {
  return (
    <aside className="flex min-h-screen max-w-[333px] flex-col bg-slate-900 p-8 text-gray-300">
      {children}
    </aside>
  )
}

export const Sidebar = {
  Root,
  Title,
  ItemsGroup,
  Item,
} as const

Root.displayName = 'Sidebar.Root'
Title.displayName = 'Sidebar.Title'
ItemsGroup.displayName = 'Sidebar.ItemsGroup'
Item.displayName = 'Sidebar.Item'
