import { type RouteObject, createBrowserRouter, Outlet } from 'react-router-dom'
import { SidebarLayout } from '@layouts/sidebar'
import { Home } from '@pages/home'
import { Internal } from '@pages/internal'
import { Permissions } from '@pages/permissions'

const routes: RouteObject[] = [
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
