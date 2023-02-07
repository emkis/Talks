import * as React from 'react'
import { usePermissions } from '@shared/authorization'
import { Text } from '@shared/components/Text'
import { Link } from 'react-router-dom'

export function Home() {
  const isReadGranted = usePermissions([
    'read:dashboard',
    'read:permissions',
    'read:projects',
    'read:user',
  ])

  return (
    <section>
      <h1 className="text-4xl font-bold text-black">Home page 🍎</h1>
      <section className="grid gap-2 py-8">{isReadGranted ? <Payed /> : <NotPayed />}</section>
    </section>
  )
}

function Payed() {
  return <Text>Now that you payed, everything is good ✨</Text>
}

function NotPayed() {
  return (
    <React.Fragment>
      <Text>Hey 👋, welcome to this demo!</Text>
      <Text className="pb-8">
        You did not pay your subscription, so we removed your permissions.
      </Text>
      <Link
        to={'/payment'}
        target="_blank"
        className="inline-flex max-w-max cursor-pointer items-center rounded-md bg-gray-900 px-5 py-3 font-semibold leading-6 text-white shadow transition duration-150 ease-in-out"
      >
        <span className="mr-3 text-xl">💰</span>
        Pay subscription
      </Link>
    </React.Fragment>
  )
}
