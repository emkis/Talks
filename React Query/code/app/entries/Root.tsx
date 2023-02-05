import { RouterProvider } from 'react-router-dom'
import { router } from './Router'

export function Root() {
  return <RouterProvider router={router} />
}
