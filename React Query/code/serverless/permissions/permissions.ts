import type { Handler } from '@netlify/functions'
import type { Permissions, PermissionsResponse } from './types'
import { supabase } from '../shared/client'
import { defaultHeaders } from '../shared/utilities/headers'
import { withGuards, isOriginAllowed } from '../shared/guards'

function fetchPermissions() {
  return supabase.from('permissions').select('*')
}

function getPermissionId(permission: Permissions) {
  return permission.name
}

const unguardedHandler: Handler = async () => {
  const permissionsResponse = await fetchPermissions()
  const parsedPermission = permissionsResponse.data?.map(getPermissionId)
  const response: PermissionsResponse | undefined = parsedPermission

  return {
    statusCode: 200,
    body: JSON.stringify(response),
    headers: defaultHeaders(),
  }
}

export const handler = withGuards(unguardedHandler, [isOriginAllowed])
