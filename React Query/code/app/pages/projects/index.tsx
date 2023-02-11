import { usePermissions } from '@shared/authorization'
import { AddButton } from '@shared/components/AddButton'
import { Heading } from '@shared/components/Heading'
import { Loader } from '@shared/components/Loader'
import { cn } from '@shared/utilities/cn'
import { delay } from '@shared/utilities/delay'
import { useQuery } from '@tanstack/react-query'

export function useProjectsQuery({ limit }: { limit?: number } = {}) {
  const fakeProjects = [
    { name: 'Marketing site 2.0', color: 'bg-purple-400' },
    { name: 'Platform redesign', color: 'bg-green-400' },
    { name: 'Waitlist pages', color: 'bg-orange-400' },
    { name: 'Cool project', color: 'bg-blue-400' },
    { name: 'Something else', color: 'bg-pink-400' },
  ]

  return useQuery({
    queryKey: ['projects', limit],
    queryFn: async () => {
      await delay(1)
      return limit ? fakeProjects.slice(0, limit) : fakeProjects
    },
  })
}

export function Projects() {
  const isCreationGranted = usePermissions(['create:projects'])
  const projectsQuery = useProjectsQuery()

  return (
    <section className="grid max-w-2xl gap-10">
      <header className="flex items-center justify-between">
        <Heading>Projects page 💥</Heading>
        {isCreationGranted ? <AddButton className="text-slate-800" /> : null}
      </header>

      <ul className="grid grid-cols-2 gap-2">
        {projectsQuery.data?.map((project, projectIndex) => (
          <li
            key={projectIndex}
            className="rounded-xl border-2 border-gray-400 p-3 font-mono text-lg font-bold text-gray-800"
          >
            <div className={cn('block h-4 w-4 rounded-full', project.color)} aria-hidden />
            <span className="block pt-2">{project.name}</span>
          </li>
        ))}
      </ul>

      {projectsQuery.isLoading ? <Loader /> : null}
    </section>
  )
}
