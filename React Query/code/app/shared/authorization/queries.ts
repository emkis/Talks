import { useQuery } from '@tanstack/react-query'
import { environment } from '@shared/utilities/environment'
import type { Permission } from '@server-types/permissions'

export const permissionsKeys = {
  all: ['permissions'] as const,
}

async function fetchPermissions() {
  const permissionsResponse = await fetch(`${environment.internalApiUrl}/permissions`)
  const permissions: Permission[] = await permissionsResponse.json()
  return permissions
}

export function usePermissionsQuery() {
  return useQuery({
    queryKey: permissionsKeys.all,
    queryFn: fetchPermissions,
  })
}
