import { Sidebar } from '@components/Sidebar'

export function Home() {
  return (
    <div className="grid grid-cols-[333px_1fr]">
      <Sidebar></Sidebar>

      <main className="p-6">
        <h1 className="text-4xl font-bold text-black">Home page</h1>
      </main>
    </div>
  )
}
