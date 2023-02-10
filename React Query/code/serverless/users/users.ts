import type { Handler } from '@netlify/functions'
import { supabase } from '../shared/client'
import { defaultHeaders } from '../shared/utilities/headers'
import { withGuards, isDomainAllowed } from '../shared/guards'

export type User = {
  id: string
  name: string
  email: string
}

function fetchUsers() {
  return supabase.from('users').select('*')
}

const unguardedHandler: Handler = async () => {
  const usersResponse = await fetchUsers()
  const users: User[] | null = usersResponse.data

  return {
    statusCode: 200,
    body: JSON.stringify(users),
    headers: defaultHeaders(),
  }
}

export const handler = withGuards(unguardedHandler, [isDomainAllowed])
