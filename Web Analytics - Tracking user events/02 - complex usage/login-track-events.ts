import { Tracker } from './tracker-service';

const trackEvent = Tracker.trackerWithDefaultProps({
  category: 'login flow',
  foo: 'bar'
})

export const trackLogin = () => {
  trackEvent({ action: 'login', label: 'trying to login in' })
}

export const trackRegister = () => {
  trackEvent({ action: 'register', label: 'creating account' })
}

export const trackLoginError = () => {
  trackEvent({ action: 'login', label: 'login failed' })
}

/**
 * Final Event 👇
 *
 * appName: 'cool name'
 * userId:  'not authenticated'
 *
 * category: 'login flow'
 * foo:      'bar'
 *
 * action:   'login'
 * label:    'login failed'
 */
