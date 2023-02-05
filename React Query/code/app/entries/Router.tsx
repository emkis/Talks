import {
  type RouteObject,
  createBrowserRouter,
  Outlet,
  RouterProvider as ReactRouterProvider,
} from 'react-router-dom'
import { SidebarLayout } from '@layouts/sidebar'
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
        element: <h1 className="text-4xl font-bold text-black">Home page 🍎</h1>,
      },
      {
        path: '/dashboard',
        element: <h1 className="text-4xl font-bold text-black">Dashboard page 🐣</h1>,
      },
      {
        path: '/projects',
        element: <h1 className="text-4xl font-bold text-black">Projects page 💥</h1>,
      },
      {
        path: '/users',
        element: <h1 className="text-4xl font-bold text-black">Users page 🐝</h1>,
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
]

export const router = createBrowserRouter(routes)

export function RouterProvider() {
  return <ReactRouterProvider router={router} />
}
