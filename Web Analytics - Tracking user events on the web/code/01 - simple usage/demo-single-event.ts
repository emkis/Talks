import { createTrackerContext, withTrackerContext } from '@warrenbrasil/web-analytics';

const appContext = createTrackerContext({
  lorem: '(1) from context',
  ipsum: '(2) from context'
})

const Tracker = withTrackerContext(appContext)

Tracker.trackEvent({
  action: '(3) from event',
  category: '(4) from event',
  label: '(5) from event',
})

/**
 * Final Event 👇
 *
 * lorem:    '(1) from context'
 * ipsum:    '(2) from context'
 *
 * action:   '(3) from event'
 * category: '(4) from event'
 * label:    '(5) from event'
 */
