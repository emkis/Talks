import { createBrowserRouter, type RouteObject, Outlet } from 'react-router-dom'
import { Home } from '@pages/home'
import { Internal } from '@pages/internal'
import { Permissions } from '@pages/permissions'
import { SidebarLayout } from '@layouts/sidebar'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <SidebarLayout>
        <Outlet />
      </SidebarLayout>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/internal',
        element: <Internal />,
      },
      {
        path: '/permissions',
        element: <Permissions />,
      },
    ],
  },
]

export const router = createBrowserRouter(routes)
