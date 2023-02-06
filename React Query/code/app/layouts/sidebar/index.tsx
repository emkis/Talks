import type { WithChildren } from '@shared/types/react'
import * as React from 'react'
import { Sidebar } from '@shared/components/Sidebar'
import { NavLink } from 'react-router-dom'
import {
  HomeIcon,
  LayersIcon,
  PersonIcon,
  Component2Icon,
  LockOpen1Icon,
} from '@radix-ui/react-icons'
import { usePermissions, usePermissionsQuery } from '@shared/authorization'
import { AddButton } from '@shared/components/AddButton'
import { ThumbsDown } from '@shared/components/ThumbsDown'

const iconProps = { width: 24, height: 24, 'aria-hidden': true }

export function SidebarLayout({ children }: WithChildren) {
  const isDashboardGranted = usePermissions(['read:dashboard'])
  const isProjectsGranted = usePermissions(['read:projects', 'create:projects'])
  const isUserGranted = usePermissions(['read:user'])

  const permissionsQuery = usePermissionsQuery()
  const totalPermissions = permissionsQuery.data?.length

  return (
    <div className="grid grid-cols-[300px_1fr]">
      <Sidebar.Root>
        <Sidebar.Title>Untitled UI</Sidebar.Title>

        <Sidebar.ItemsGroup>
          <Sidebar.Item asChild>
            <NavLink to="/">
              <HomeIcon width={22} height={22} aria-hidden />
              <span>Home</span>
            </NavLink>
          </Sidebar.Item>

          <Sidebar.Item asChild>
            <NavLink to="/dashboard">
              <IsGranted granted={isDashboardGranted}>
                <Component2Icon />
              </IsGranted>
              <span>Dashboard</span>
            </NavLink>
          </Sidebar.Item>

          <Sidebar.Item asChild>
            <NavLink to="/projects">
              <IsGranted granted={isProjectsGranted}>
                <LayersIcon />
              </IsGranted>
              <span>Projects</span>
            </NavLink>
          </Sidebar.Item>

          <Sidebar.Item asChild>
            <NavLink to="/users">
              <IsGranted granted={isUserGranted}>
                <PersonIcon />
              </IsGranted>
              <span>Users</span>
            </NavLink>
          </Sidebar.Item>

          <Sidebar.Item asChild>
            <NavLink to="/permissions">
              <LockOpen1Icon {...iconProps} />
              <div className="flex w-full justify-between">
                <span>Permissions</span>
                <span className="grid h-5 w-7 place-content-center rounded-full bg-slate-600 text-xs text-gray-200">
                  {totalPermissions ?? 0}
                </span>
              </div>
            </NavLink>
          </Sidebar.Item>

          <Sidebar.Item>
            <ThumbsDown />
            <span>Tasks</span>
          </Sidebar.Item>

          <Sidebar.Item>
            <ThumbsDown />
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
                <NavLink to="/internal">
                  <div className="h-2 w-2 rounded-full bg-white" aria-hidden />
                  <span>Waitlist pages</span>
                </NavLink>
              </Sidebar.Item>
            </Sidebar.ItemsGroup>
          </section>
        )}
      </Sidebar.Root>

      <main className="py-8 px-14">{children}</main>
    </div>
  )
}

function IsGranted({ granted, children }: { granted: boolean; children: JSX.Element }) {
  const IconWithProps = React.cloneElement(children, iconProps)
  return granted ? IconWithProps : <ThumbsDown />
}
