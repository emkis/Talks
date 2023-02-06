import { environment } from '@shared/utilities/environment'

export type UpdatePermissionsOperation = 'reset' | 'default' | 'readonly'

export function updatePermissions(operation: UpdatePermissionsOperation) {
  return fetch(`${environment.internalApiUrl}/permissions-internal`, {
    method: 'POST',
    body: JSON.stringify({ operation }),
  })
}
