import { Sidebar } from '@shared/components/Sidebar'
import type { WithChildren } from '@shared/types/react'

export function SidebarLayout({ children }: WithChildren) {
  return (
    <div className="grid grid-cols-[300px_1fr]">
      <Sidebar />
      <main className="p-6">{children}</main>
    </div>
  )
}
