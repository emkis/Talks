import type { WithChildren } from '@shared/types/react'
import { Sidebar } from '@shared/components/Sidebar'
import { Link } from 'react-router-dom'
import {
  HomeIcon,
  PieChartIcon,
  LayersIcon,
  PersonIcon,
  Component2Icon,
  Crosshair1Icon,
  LockOpen1Icon,
} from '@radix-ui/react-icons'
import { usePermissions } from '@pages/permissions/queries/permissions'
import { AddButton } from '@shared/components/AddButton'

export function SidebarLayout({ children }: WithChildren) {
  const isProjectsEnabled = usePermissions(['read:projects', 'create:projects'])

  return (
    <div className="grid grid-cols-[300px_1fr]">
      <Sidebar.Root>
        <Sidebar.Title>Untitled UI</Sidebar.Title>

        <Sidebar.ItemsGroup>
          <Sidebar.Item asChild>
            <Link to="/">
              <HomeIcon width={22} height={22} aria-hidden />
              <span>Home</span>
            </Link>
          </Sidebar.Item>

          <Sidebar.Item>
            <Component2Icon width={22} height={22} aria-hidden />
            <span>Dashboard</span>
          </Sidebar.Item>

          {isProjectsEnabled && (
            <Sidebar.Item>
              <LayersIcon width={22} height={22} aria-hidden />
              <span>Projects</span>
            </Sidebar.Item>
          )}

          <Sidebar.Item>
            <Crosshair1Icon width={22} height={22} aria-hidden />
            <div className="flex w-full justify-between">
              <span>Tasks</span>
              <span className="grid h-5 w-7 place-content-center rounded-full bg-slate-600 text-xs text-gray-200">
                15
              </span>
            </div>
          </Sidebar.Item>

          <Sidebar.Item>
            <PieChartIcon width={22} height={22} aria-hidden />
            <span>Reporting</span>
          </Sidebar.Item>

          <Sidebar.Item>
            <PersonIcon width={22} height={22} aria-hidden />
            <span>Users</span>
          </Sidebar.Item>

          <Sidebar.Item asChild>
            <Link to="/permissions">
              <LockOpen1Icon width={22} height={22} aria-hidden />
              <span>Permissions</span>
            </Link>
          </Sidebar.Item>
        </Sidebar.ItemsGroup>

        <section className="mt-auto">
          <header className="flex items-center justify-between py-3">
            <span className="text-sm text-white">Projects</span>
            <AddButton />
          </header>

          <Sidebar.ItemsGroup>
            <Sidebar.Item>
              <div className="h-2 w-2 rounded-full bg-white" aria-hidden />
              <span>Marketing site 2.0</span>
            </Sidebar.Item>
            <Sidebar.Item>
              <div className="h-2 w-2 rounded-full bg-white" aria-hidden />
              <span>Platform redesign</span>
            </Sidebar.Item>
            <Sidebar.Item asChild>
              <Link to="/internal">
                <div className="h-2 w-2 rounded-full bg-white" aria-hidden />
                <span>Waitlist pages</span>
              </Link>
            </Sidebar.Item>
          </Sidebar.ItemsGroup>
        </section>
      </Sidebar.Root>

      <main className="py-8 px-12">{children}</main>
    </div>
  )
}
