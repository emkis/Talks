import { AddButton } from '@shared/components/AddButton'
import { usePermissions, usePermissionsQuery } from '@shared/authorization'
import { Heading } from '@shared/components/Heading'
import { Loader } from '@shared/components/Loader'

export function Permissions() {
  const isCreationGranted = usePermissions(['create:permissions'])
  const permissionsQuery = usePermissionsQuery()
  const sortedPermissions = permissionsQuery.data?.sort()

  return (
    <section className="grid max-w-md gap-10">
      <header className="flex items-center justify-between">
        <Heading>
          Permissions 💅
          <small className="text-sm">{permissionsQuery.isFetching ? '(updating...)' : null}</small>
        </Heading>
        {isCreationGranted ? <AddButton className="text-slate-800" /> : null}
      </header>

      <ul className="grid gap-3">
        {sortedPermissions?.map((permission, permissionIndex) => (
          <li
            key={permissionIndex}
            className="rounded-xl border-2 border-gray-400 p-3 font-mono text-lg font-bold text-gray-800"
          >
            {permission.startsWith('create') && <span>🟢 </span>}
            {permission.startsWith('read') && <span>🔵 </span>}
            <span>{permission}</span>
          </li>
        ))}
      </ul>

      {permissionsQuery.isLoading ? <Loader /> : null}
    </section>
  )
}
