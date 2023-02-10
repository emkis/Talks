import type { FunctionGuard } from './with-guards'
import { environment } from '../utilities/environment'

export function getAllowedDomains(): Array<string> {
  return [environment.appUrl]
}

export const isOriginAllowed: FunctionGuard = (event) => {
  const requestHeaders = event.headers
  const requestRelationship = requestHeaders['sec-fetch-site']
  return requestRelationship === 'same-origin'
}
