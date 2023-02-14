import * as React from 'react'
import { usePermissions } from '@shared/authorization'
import { Text } from '@shared/components/Text'
import { Heading } from '@shared/components/Heading'
import { Link } from 'react-router-dom'

export function Home() {
  const isReadGranted = usePermissions([
    'read:dashboard',
    'read:permissions',
    'read:projects',
    'read:user',
  ])

  return (
    <section className="grid gap-10">
      <Heading>
        Home page 🍎
        <small className="text-lg"> (without React Query 🐢)</small>
      </Heading>
      {isReadGranted ? <Payed /> : <NotPayed />}
    </section>
  )
}

function Payed() {
  return <Text>Now that you payed, everything is good 🤑</Text>
}

function NotPayed() {
  return (
    <React.Fragment>
      <article className="grid gap-2">
        <Text>Hey 👋, welcome to this demo!</Text>
        <Text>You did not pay your subscription, so we removed your permissions.</Text>
      </article>
      <Link
        to={'/payment'}
        target="_blank"
        className="inline-flex max-w-max cursor-pointer items-center rounded-md bg-gray-900 px-7 py-4 text-xl font-semibold leading-6 text-white shadow transition duration-150 ease-in-out"
      >
        <span className="mr-3">💰</span>
        Pay subscription
      </Link>
    </React.Fragment>
  )
}
