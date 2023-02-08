import { useQuery } from '@tanstack/react-query'
import { environment } from '@shared/utilities/environment'
import type { Permission } from '@server-types/permissions'

async function fetchPermissions() {
  const permissionsResponse = await fetch(`${environment.internalApiUrl}/permissions`)
  const permissions: Permission[] = await permissionsResponse.json()
  return permissions
}

export function usePermissionsQuery() {
  return useQuery({
    queryKey: ['permissions'],
    queryFn: fetchPermissions,
  })
}
