import { useQuery } from '@tanstack/react-query'
import { environment } from '@shared/utilities/environment'
import type { User } from '@server-types/users'
import { delay } from '@shared/utilities/delay'

async function fetchUsers() {
  const usersResponse = await fetch(`${environment.internalApiUrl}/users`)
  const users: User[] = await usersResponse.json()
  await delay(1)
  return users
}

export function useUsersQuery() {
  return useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  })
}
