import { environment } from '@shared/utilities/environment'

function sendOperation(operation: string) {
  fetch(`${environment.internalApiUrl}/permissions-internal`, {
    method: 'POST',
    body: JSON.stringify({ operation }),
  })
}

export function Internal() {
  const operations = ['reset', 'default', 'readonly', 'add-p', 'remove-p']

  return (
    <section className="grid gap-8">
      <h1 className="text-4xl font-bold text-black">Internal</h1>

      {operations.map((operation) => {
        return (
          <button
            key={operation}
            className="flex h-12 w-full items-center justify-center rounded-lg bg-slate-900 px-6 font-semibold text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 sm:w-auto"
            type="button"
            onClick={() => sendOperation(operation)}
          >
            {operation} permissions
          </button>
        )
      })}
    </section>
  )
}
