import * as React from 'react'
import { updatePermissions } from '@shared/authorization'
import { Text } from '@shared/components/Text'
import { Heading } from '@shared/components/Heading'

export function ProcessingPayment() {
  const [paymentStatus, setPaymentStatus] = React.useState<'idle' | 'processing' | 'confirmed'>(
    'idle'
  )

  React.useEffect(() => {
    const previousTitle = document.title
    const newTitle = `Payment on ${document.title}`

    setPageTitle(newTitle)
    return () => setPageTitle(previousTitle)
  }, [])

  function startPayment() {
    setPaymentStatus('processing')

    setTimeout(() => {
      setPaymentStatus('confirmed')
      closeTab()
    }, 3000)
  }

  function closeTab() {
    setTimeout(window.close, 3000)
  }

  return (
    <main className="m-auto grid max-w-3xl gap-10 p-10">
      <Heading>Payment page 🔥</Heading>

      <article className="grid gap-2">
        <Text>This is just a fake external page to simulate a payment being made!</Text>
        <Text>No payment is actually happening, we are just updating the permissions 🦊</Text>
      </article>

      <button
        type="button"
        onClick={() => {
          updatePermissions('readonly')
          startPayment()
        }}
        className="inline-flex max-w-max cursor-pointer items-center rounded-md bg-gray-900 px-7 py-4 text-xl font-semibold leading-6 text-white shadow transition duration-150 ease-in-out"
      >
        {paymentStatus === 'idle' && (
          <React.Fragment>
            <span className="mr-3">💳</span>
            <span>Start payment</span>
          </React.Fragment>
        )}

        {paymentStatus === 'processing' && (
          <React.Fragment>
            <span className="mr-3 animate-spin">❄️</span>
            <span>Processing your payment...</span>
          </React.Fragment>
        )}

        {paymentStatus === 'confirmed' && (
          <React.Fragment>
            <span className="mr-3">✅</span>
            <span>All good! Going back to previous page</span>
          </React.Fragment>
        )}
      </button>
    </main>
  )
}

function setPageTitle(title: string) {
  document.title = title
}
