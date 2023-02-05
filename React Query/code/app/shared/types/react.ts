import type * as React from 'react'

// eslint-disable-next-line @typescript-eslint/ban-types
export type WithChildren<Props = {}> = Props & {
  children?: React.ReactNode
}
