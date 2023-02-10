import type { Handler, HandlerEvent } from '@netlify/functions'
import { supabase } from '../shared/client'
import { defaultHeaders } from '../shared/utilities/headers'
import { withGuards, isOriginAllowed } from '../shared/guards'

const permissions = {
  defaults: ['read:home', 'read:permissions'] as const,
  create: ['create:projects', 'create:user', 'create:permissions'] as const,
  read: ['read:projects', 'read:user', 'read:dashboard'] as const,
  all: () => [...permissions.create, ...permissions.read] as const,
}

function insertPermission(permission: string) {
  return supabase.from('permissions').insert({ name: permission })
}

async function resetAllPermissions() {
  await Promise.all(
    permissions.all().map((permission) => {
      return supabase.from('permissions').delete().eq('name', permission)
    })
  )
  return { allGood: true }
}

async function defaultPermissions() {
  await resetAllPermissions()
  await Promise.all(permissions.all().map(insertPermission))
  return { allGood: true }
}

async function readPermissionsOnly() {
  await resetAllPermissions()
  await Promise.all(permissions.read.map(insertPermission))
  return { allGood: true }
}

const unguardedHandler: Handler = async (event: HandlerEvent) => {
  const body = JSON.parse(event.body!)

  const operations = new Map([
    ['reset', resetAllPermissions],
    ['default', defaultPermissions],
    ['readonly', readPermissionsOnly],
  ])

  const operation = operations.get(body.operation)
  const response = await operation!()

  return {
    statusCode: 200,
    body: JSON.stringify(response),
    headers: defaultHeaders(),
  }
}

export const handler = withGuards(unguardedHandler, [isOriginAllowed])
