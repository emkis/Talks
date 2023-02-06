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
import { ProcessingPayment } from '@pages/payment'

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
  {
    path: '/payment',
    element: <ProcessingPayment />,
  },
]

export const router = createBrowserRouter(routes)

export function RouterProvider() {
  return <ReactRouterProvider router={router} />
}
