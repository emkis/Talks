import * as React from 'react'
import { cn } from '@shared/utilities/cn'
import {
  HomeIcon,
  PieChartIcon,
  LayersIcon,
  PersonIcon,
  Component2Icon,
  Crosshair1Icon,
  PlusIcon,
  ChevronRightIcon,
} from '@radix-ui/react-icons'

function SidebarItem({ children }: { children: React.ReactNode }) {
  return (
    <a
      href="#ss"
      className="flex flex-nowrap items-center justify-start gap-4 rounded-lg p-2.5 text-gray-300 transition-colors hover:bg-slate-700 hover:text-white focus:outline-none focus-visible:text-white focus-visible:ring"
    >
      {children}
    </a>
  )
}

function ProjectItem({ children }: { children: React.ReactNode }) {
  return (
    <a
      href="#aaa"
      className="flex flex-nowrap items-center justify-between rounded-lg p-2.5 text-gray-300 transition-colors hover:bg-slate-700 hover:text-white focus:outline-none focus-visible:text-white focus-visible:ring"
    >
      <div className="flex flex-nowrap items-center justify-start gap-4">
        <div className="h-2 w-2 rounded-full bg-white" aria-hidden></div>
        {children}
      </div>
      <ChevronRightIcon width={22} height={22} aria-hidden />
    </a>
  )
}

export function Sidebar() {
  return (
    <aside className="flex min-h-screen max-w-[333px] flex-col bg-slate-900 p-8 text-gray-300">
      <div className="flex items-center justify-items-center gap-3 pb-5">
        <div className="h-3 w-3 rounded-full bg-white" aria-hidden></div>
        <span className="block  text-xl font-bold text-white ">Untitled UI</span>
      </div>

      <nav className="grid gap-1">
        <SidebarItem>
          <HomeIcon width={22} height={22} aria-hidden />
          <span>Home</span>
        </SidebarItem>
        <SidebarItem>
          <Component2Icon width={22} height={22} aria-hidden />
          <span>Dashboard</span>
        </SidebarItem>
        <SidebarItem>
          <LayersIcon width={22} height={22} aria-hidden />
          <span>Projects</span>
        </SidebarItem>
        <SidebarItem>
          <Crosshair1Icon width={22} height={22} aria-hidden />
          <div className="flex w-full justify-between">
            <span>Tasks</span>
            <span className="grid h-5 w-7 place-content-center rounded-full bg-slate-600 text-xs text-gray-200">
              15
            </span>
          </div>
        </SidebarItem>
        <SidebarItem>
          <PieChartIcon width={22} height={22} aria-hidden />
          <span>Reporting</span>
        </SidebarItem>
        <SidebarItem>
          <PersonIcon width={22} height={22} aria-hidden />
          <span>Users</span>
        </SidebarItem>
      </nav>

      <section className="mt-auto">
        <header className="flex items-center justify-between py-3">
          <span className="text-white">Projects</span>
          <button
            type="button"
            className="grid h-7 w-10 place-content-center rounded-2xl border-2 border-slate-600 fill-white text-xs"
          >
            <span className="sr-only">Add project</span>
            <PlusIcon className="text-white" width={22} height={22} aria-hidden />
          </button>
        </header>

        <nav>
          <ProjectItem>
            <span>Marketing site 2.0</span>
          </ProjectItem>
          <ProjectItem>
            <span>Platform redesign</span>
          </ProjectItem>
          <ProjectItem>
            <span>Waitlist pages</span>
          </ProjectItem>
        </nav>
      </section>
    </aside>
  )
}
