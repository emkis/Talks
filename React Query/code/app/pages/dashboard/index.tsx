import { Heading } from '@shared/components/Heading'
import { Loader } from '@shared/components/Loader'
import { delay } from '@shared/utilities/delay'
import { useQuery } from '@tanstack/react-query'

function useWidgetsQuery() {
  const fakeWidgets = [
    { name: 'Lorem ipsum' },
    { name: 'Dolor sit' },
    { name: 'Amet consectetur' },
    { name: 'Adipisicing elit' },
    { name: 'Similique' },
    { name: 'Quod illum?' },
  ]

  return useQuery({
    queryKey: ['dashboard', 'widgets'],
    queryFn: async () => {
      await delay(2)
      return fakeWidgets
    },
  })
}

export function Dashboard() {
  const widgetsQuery = useWidgetsQuery()

  return (
    <section className="grid max-w-2xl gap-10">
      <Heading>Dashboard page 🐣</Heading>

      <ul className="grid grid-cols-3 gap-3">
        {widgetsQuery.data?.map((widget, widgetIndex) => (
          <li
            key={widgetIndex}
            className="grid h-[220px] w-full place-items-center rounded-xl border-2 border-gray-400 text-gray-800"
          >
            <p className="font-mono text-lg font-bold">{widget.name}</p>
          </li>
        ))}
      </ul>

      {widgetsQuery.isLoading ? <Loader /> : null}
    </section>
  )
}
