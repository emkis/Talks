import type { WithChildren } from '@shared/types/react'
import { Sidebar } from '@shared/components/Sidebar'
import { Link } from 'react-router-dom'
import {
  HomeIcon,
  LayersIcon,
  PersonIcon,
  Component2Icon,
  LockOpen1Icon,
} from '@radix-ui/react-icons'
import { usePermissions, usePermissionsQuery } from '@shared/authorization'
import { AddButton } from '@shared/components/AddButton'

export function SidebarLayout({ children }: WithChildren) {
  const isDashboardGranted = usePermissions(['read:dashboard'])
  const isProjectsGranted = usePermissions(['read:projects', 'create:projects'])
  const isUserGranted = usePermissions(['read:user'])
  const isPermissionsGranted = usePermissions(['read:permissions'])

  const permissionsQuery = usePermissionsQuery()
  const totalPermissions = permissionsQuery.data?.length

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

          <Sidebar.Item asChild>
            <Link to="/dashboard">
              {isDashboardGranted ? <Component2Icon width={22} height={22} aria-hidden /> : '👎'}
              <span>Dashboard</span>
            </Link>
          </Sidebar.Item>

          <Sidebar.Item asChild>
            <Link to="/projects">
              {isProjectsGranted ? <LayersIcon width={22} height={22} aria-hidden /> : '👎'}
              <span>Projects</span>
            </Link>
          </Sidebar.Item>

          <Sidebar.Item asChild>
            <Link to="/users">
              {isUserGranted ? <PersonIcon width={22} height={22} aria-hidden /> : '👎'}
              <span>Users</span>
            </Link>
          </Sidebar.Item>

          <Sidebar.Item asChild>
            <Link to="/permissions">
              {isPermissionsGranted ? <LockOpen1Icon width={22} height={22} aria-hidden /> : '👎'}
              <div className="flex w-full justify-between">
                <span>Permissions</span>
                <span className="grid h-5 w-7 place-content-center rounded-full bg-slate-600 text-xs text-gray-200">
                  {totalPermissions ?? 0}
                </span>
              </div>
            </Link>
          </Sidebar.Item>

          <Sidebar.Item>
            <span>👎</span>
            <span>Tasks</span>
          </Sidebar.Item>

          <Sidebar.Item>
            <span>👎</span>
            <span>Reporting</span>
          </Sidebar.Item>
        </Sidebar.ItemsGroup>

        {isProjectsGranted && (
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
        )}
      </Sidebar.Root>

      <main className="py-8 px-14">{children}</main>
    </div>
  )
}
