import type { FunctionGuard } from './with-guards'

export function getAllowedDomains(): Array<string> {
  return ['emkis-react-query-talk.netlify.app', 'localhost:8888']
}

export const isDomainAllowed: FunctionGuard = (event) => {
  const domain = event.headers.origin
  const allowedDomains = getAllowedDomains()

  return domain ? allowedDomains.includes(domain) : false
}
