import { createTrackerContext, withTrackerContext } from '@warrenbrasil/web-analytics';

const appContext = createTrackerContext({
  lorem: 'from context',
  ipsum: 'from context'
})

const Tracker = withTrackerContext(appContext)

const trackEvent = Tracker.trackerWithDefaultProps({
  category: 'from default',
  foo: 'from default'
})

trackEvent({ action: 'from event A', label: 'from event A' })
/**
 * Final Event 👇
 *
 * lorem:    'from context'
 * ipsum:    'from context'
 *
 * category: 'from default'
 * foo:      'from default'
 *
 * action:   'from event A'
 * label:    'from event A'
 */

trackEvent({ action: 'from event B', label: 'from event B' })
/**
 * Final Event 👇
 *
 * lorem:    'from context'
 * ipsum:    'from context'
 *
 * category: 'from default'
 * foo:      'from default'
 *
 * action:   'from event B'
 * label:    'from event B'
 */
