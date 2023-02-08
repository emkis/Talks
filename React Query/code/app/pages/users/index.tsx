import { Heading } from '@shared/components/Heading'
import { useUsersQuery } from './users-query'

export function Users() {
  const usersQuery = useUsersQuery()

  return (
    <section className="grid max-w-md gap-10">
      <Heading>
        Users page 👨‍👨‍👧‍👦
        <small className="text-sm">{usersQuery.isFetching ? '(updating...)' : null}</small>
      </Heading>

      <ul className="grid gap-3">
        {usersQuery.data?.map((user) => (
          <li key={user.id} className="rounded-xl border-2 border-gray-400 p-3 text-gray-800">
            <p className="pb-2 text-lg font-bold">{user.name}</p>
            <p className="font-mono text-sm font-semibold">Email: {user.email}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
