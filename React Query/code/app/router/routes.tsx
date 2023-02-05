import { createBrowserRouter, type RouteObject } from 'react-router-dom'
import { Home } from '@pages/home'
import { Internal } from '@pages/internal'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
    index: true,
  },
  {
    path: '/internal',
    element: <Internal />,
    index: true,
  },
]

export const router = createBrowserRouter(routes)
