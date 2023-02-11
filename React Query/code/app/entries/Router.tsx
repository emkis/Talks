import {
  type RouteObject,
  createBrowserRouter,
  Outlet,
  RouterProvider as ReactRouterProvider,
} from 'react-router-dom'
import { SidebarLayout } from '@layouts/sidebar'
import { Home } from '@pages/home'
import { Internal } from '@pages/internal'
import { Permissions } from '@pages/permissions'
import { Users } from '@pages/users'
import { ProcessingPayment } from '@pages/payment'
import { Dashboard } from '@pages/dashboard'
import { Projects } from '@pages/projects'

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
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/projects',
        element: <Projects />,
      },
      {
        path: '/users',
        element: <Users />,
      },
      {
        path: '/permissions',
        element: <Permissions />,
      },
      {
        path: '/internal',
        element: <Internal />,
      },
    ],
  },
  {
    path: '/payment',
    element: <ProcessingPayment />,
  },
]

export const router = createBrowserRouter(routes)

export function RouterProvider() {
  return <ReactRouterProvider router={router} />
}
