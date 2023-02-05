import { RouterProvider as Provider } from 'react-router-dom'
import { router } from './routes'

export function RouterProvider() {
  return <Provider router={router} />
}
