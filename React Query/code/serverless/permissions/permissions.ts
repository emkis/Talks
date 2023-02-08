import type { Handler } from '@netlify/functions'
import { supabase } from '../shared/client'
import { defaultHeaders } from '../shared/utilities/headers'
import { Permissions, PermissionsResponse } from './types'

function fetchPermissions() {
  return supabase.from('permissions').select('*')
}

function getPermissionId(permission: Permissions) {
  return permission.name
}

export const handler: Handler = async () => {
  const permissionsResponse = await fetchPermissions()
  const parsedPermission = permissionsResponse.data?.map(getPermissionId)
  const response: PermissionsResponse | undefined = parsedPermission

  return {
    statusCode: 200,
    body: JSON.stringify(response),
    headers: defaultHeaders(),
  }
}
