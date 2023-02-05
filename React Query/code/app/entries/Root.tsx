import * as React from 'react'
import { RouterProvider } from './Router'
import { QueryProvider } from './Query'

export function Root() {
  return (
    <React.Fragment>
      <QueryProvider>
        <RouterProvider />
      </QueryProvider>
    </React.Fragment>
  )
}
