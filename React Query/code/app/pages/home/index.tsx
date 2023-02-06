import { Link } from 'react-router-dom'

export function Home() {
  return (
    <section>
      <h1 className="text-4xl font-bold text-black">Home page 🍎</h1>

      <section className="grid gap-2 py-8">
        <p className="text-xl text-gray-900">Hey 👋, welcome to this demo!</p>
        <p className="text-xl text-gray-900">
          You can add more permissions by clicking on the button below.
        </p>
      </section>
      <Link
        to={'/payment'}
        target="_blank"
        className="inline-flex max-w-max cursor-pointer items-center rounded-md bg-gray-900 px-5 py-3 font-semibold leading-6 text-white shadow transition duration-150 ease-in-out"
      >
        <span className="mr-3 text-xl">💰</span>
        Pay to add more permissions
      </Link>
    </section>
  )
}
