export type Permissions = {
  name: string
  createdAt: string
}

export type PermissionsResponse = Array<Permissions['name']>
