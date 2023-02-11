import type { FunctionGuard } from './with-guards'

export const isOriginAllowed: FunctionGuard = (event) => {
  const requestHeaders = event.headers
  const requestRelationship = requestHeaders['sec-fetch-site']
  return requestRelationship === 'same-origin'
}
