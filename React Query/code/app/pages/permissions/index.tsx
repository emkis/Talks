import { AddButton } from '@shared/components/AddButton'
import { usePermissions, usePermissionsQuery } from '@shared/authorization'

export function Permissions() {
  const isPermissionsGranted = usePermissions(['create:permissions'])
  const permissionsQuery = usePermissionsQuery()

  return (
    <section>
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold text-black">
          Permissions 💅
          <small className="text-sm">{permissionsQuery.isFetching ? '(updating...)' : null}</small>
        </h1>
        {isPermissionsGranted && <AddButton className="text-slate-800" />}
      </div>

      <ul className="grid gap-2 py-8">
        {permissionsQuery.data?.map((permission, permissionIndex) => (
          <li
            key={permissionIndex}
            className="max-w-md rounded-xl border-2 border-gray-400 p-3 font-mono text-lg font-bold text-gray-800"
          >
            {permission.startsWith('create') && <span>🟢</span>}
            {permission.startsWith('read') && <span>🔵</span>}
            {permission.startsWith('update') && <span>⚫️</span>} {permission}
          </li>
        ))}
      </ul>
    </section>
  )
}
