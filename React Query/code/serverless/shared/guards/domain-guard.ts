import type { FunctionGuard } from './with-guards'
import { environment } from '../../shared/utilities/environment'

export function getAllowedDomains(): Array<string> {
  return [environment.appUrl]
}

export const isDomainAllowed: FunctionGuard = (event) => {
  const domain = event.headers.origin
  const allowedDomains = getAllowedDomains()

  return domain ? allowedDomains.includes(domain) : false
}
