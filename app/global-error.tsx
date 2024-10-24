'use client' // Error boundaries must be Client Components
 
import * as Sentry from '@sentry/react'
import { useEffect } from 'react'

export default function GlobalError({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {

  useEffect(() => {
    console.error(error)
    Sentry.captureException(error)
  }, [error])

  return (
    // global-error must include html and body tags
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}