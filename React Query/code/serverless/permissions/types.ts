export type Permission =
  | 'create:projects'
  | 'read:projects'
  | 'update:projects'
  | 'create:user'
  | 'read:user'
  | 'update:user'
  | 'create:permissions'
  | 'read:permissions'

export type Permissions = {
  name: Permission
  createdAt: string
}

export type PermissionsResponse = Array<Permissions['name']>
