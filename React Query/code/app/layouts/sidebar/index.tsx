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

export function SidebarLayout({ children }: WithChildren) {
  const isHomeGranted = usePermissions(['read:home'])
  const isDashboardGranted = usePermissions(['read:dashboard'])
  const isProjectsReadGranted = usePermissions(['read:projects'])
  const isProjectsCreateGranted = usePermissions(['create:projects'])
  const isUserGranted = usePermissions(['read:user'])
  const isPermissionsGranted = usePermissions(['read:permissions'])

  const permissionsQuery = usePermissionsQuery()
  const totalPermissions = permissionsQuery.data?.length

  return (
    <div className="pl-[333px]">
      <Sidebar.Root>
        <Sidebar.Title>Untitled UI</Sidebar.Title>

        <Sidebar.ItemsGroup>
          <Sidebar.Item asChild>
            <NavLink to="/">
              <IsGranted granted={isHomeGranted}>
                <HomeIcon />
              </IsGranted>
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
              <IsGranted granted={isProjectsReadGranted}>
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
              <IsGranted granted={isPermissionsGranted}>
                <LockOpen1Icon />
              </IsGranted>
              <div className="flex w-full items-center justify-between">
                <span>Permissions</span>
                <span className="grid h-5 w-7 place-content-center rounded-full bg-slate-600 text-xs text-gray-200">
                  {totalPermissions ?? 0}
                </span>
              </div>
            </NavLink>
          </Sidebar.Item>
        </Sidebar.ItemsGroup>

        {isProjectsReadGranted && (
          <section className="mt-auto">
            <header className="flex items-center justify-between pb-3">
              <span className="text-base text-white">Projects</span>
              {isProjectsCreateGranted ? <AddButton /> : <ThumbsDown />}
            </header>

            <Sidebar.ItemsGroup>
              <Sidebar.Item>
                <div className="h-2 w-2 rounded-full bg-purple-400" aria-hidden />
                <span>Marketing site 2.0</span>
              </Sidebar.Item>

              <Sidebar.Item>
                <div className="h-2 w-2 rounded-full bg-green-400" aria-hidden />
                <span>Platform redesign</span>
              </Sidebar.Item>

              <Sidebar.Item>
                <div className="h-2 w-2 rounded-full bg-orange-400" aria-hidden />
                <span>Waitlist pages</span>
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
  const IconWithProps = React.cloneElement(children, { width: 24, height: 24, 'aria-hidden': true })
  return granted ? IconWithProps : <ThumbsDown />
}
