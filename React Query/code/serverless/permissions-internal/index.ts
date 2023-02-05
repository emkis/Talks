import type { Handler, HandlerEvent } from '@netlify/functions'
import { supabase } from '../shared/client'
import { defaultHeaders } from '../shared/utilities/headers'

const permissions = {
  create: ['create:projects', 'create:user', 'create:permissions'] as const,
  read: ['read:projects', 'read:user', 'read:permissions', 'read:dashboard'] as const,
  update: ['update:projects', 'update:user'] as const,
  all: () => [...permissions.create, ...permissions.read, ...permissions.update],
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

function addPermissions() {
  return supabase
    .from('permissions')
    .insert([{ name: 'read:permissions' }, { name: 'create:permissions' }])
}

async function removePermissions() {
  await supabase.from('permissions').delete().eq('name', 'read:permissions')
  await supabase.from('permissions').delete().eq('name', 'create:permissions')
  return { allGood: true }
}

const handler: Handler = async (event: HandlerEvent) => {
  const body = JSON.parse(event.body!)

  // @ts-expect-error I don't have time to understand this error, I need to finish this demo
  const operations = new Map([
    ['reset', resetAllPermissions],
    ['default', defaultPermissions],
    ['readonly', readPermissionsOnly],
    ['add-p', addPermissions],
    ['remove-p', removePermissions],
  ])

  const operation = operations.get(body.operation)
  const response = await operation!()

  return {
    statusCode: 200,
    body: JSON.stringify(response),
    headers: defaultHeaders(),
  }
}

export { handler }
