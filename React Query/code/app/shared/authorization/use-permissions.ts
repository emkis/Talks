import type { Permission } from '@server-types/permissions'
import { usePermissionsQuery } from './queries'

export type UsePermissionInput = Permission[] | string[]

export function usePermissions(necessaryPermissions: UsePermissionInput): boolean {
  const { data: userPermissions } = usePermissionsQuery()
  if (!userPermissions) return false

  return necessaryPermissions.every((permission) => {
    return userPermissions.includes(permission as Permission)
  })
}
