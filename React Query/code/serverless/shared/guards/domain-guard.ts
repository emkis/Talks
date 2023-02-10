import type { FunctionGuard } from './with-guards'
import { environment } from '../../shared/utilities/environment'

export function getAllowedDomains(): Array<string> {
  return ['emkis-react-query-talk.netlify.app', 'localhost:8888']
}

export const isDomainAllowed: FunctionGuard = (event) => {
  console.info('NETLIFY_LOCAL: ', process.env.NETLIFY_LOCAL)

  const domain = event.headers.host
  const allowedDomains = getAllowedDomains()

  console.info('Domain: ', domain)
  return domain ? allowedDomains.includes(domain) : false
}
