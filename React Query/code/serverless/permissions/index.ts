import type { Handler } from '@netlify/functions'
import { supabase } from '../shared/client'
import { defaultHeaders } from '../shared/utilities/headers'

export type Permissions = {
  name: string
  createdAt: string
}

function fetchPermissions() {
  return supabase.from('permissions').select('*')
}

function getPermissionId(permission: Permissions) {
  return permission.name
}

const handler: Handler = async () => {
  const permissionsResponse = await fetchPermissions()
  const parsedPermission = permissionsResponse.data?.map(getPermissionId)

  return {
    statusCode: 200,
    body: JSON.stringify(parsedPermission),
    headers: defaultHeaders(),
  }
}

export { handler }
