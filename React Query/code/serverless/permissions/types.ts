export type Permission =
  | 'read:home'
  | 'create:projects'
  | 'read:projects'
  | 'create:user'
  | 'read:user'
  | 'create:permissions'
  | 'read:permissions'
  | 'read:dashboard'

export type Permissions = {
  name: Permission
  createdAt: string
}

export type PermissionsResponse = Array<Permissions['name']>
