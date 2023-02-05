import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { WithChildren } from '@shared/types/react'

export const queryClient = new QueryClient()

export function QueryProvider({ children }: WithChildren) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
