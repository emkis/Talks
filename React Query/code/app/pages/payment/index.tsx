import * as React from 'react'
import { updatePermissions } from '@shared/authorization'

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
    <main className="m-auto max-w-3xl p-10">
      <h1 className="text-4xl font-bold text-black">Payment page 🔥</h1>

      <section className="grid gap-2 py-8">
        <p className="text-xl text-gray-900">
          This is a fake page to simulate a payment being processed! Nothing is really happening, I
          just needed you to open a page in another tab 🫣
        </p>
      </section>

      <button
        type="button"
        onClick={() => {
          updatePermissions('readonly')
          startPayment()
        }}
        className="inline-flex max-w-max cursor-pointer items-center rounded-md bg-gray-900 px-5 py-3 font-semibold leading-6 text-white shadow transition duration-150 ease-in-out"
      >
        {paymentStatus === 'idle' && (
          <React.Fragment>
            <span className="mr-3 text-xl">💳</span>
            <span>Start payment</span>
          </React.Fragment>
        )}

        {paymentStatus === 'processing' && (
          <React.Fragment>
            <span className="mr-3 animate-spin text-xl">❄️</span>
            <span>Processing your payment...</span>
          </React.Fragment>
        )}

        {paymentStatus === 'confirmed' && (
          <React.Fragment>
            <span className="mr-3 text-xl">✅</span>
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
