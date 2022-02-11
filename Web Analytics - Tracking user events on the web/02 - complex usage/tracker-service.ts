import { createTrackerContext, withTrackerContext } from '@warrenbrasil/web-analytics';

function getUserId(): string | null {
  return localStorage.getItem('user-id')
}

function getContextProps() {
  return {
    appName: 'cool name',
    userId: getUserId() ?? 'not authenticated'
    // ...important props
  }
}

const appContext = createTrackerContext(getContextProps())

export const updateTrackerContext = () => appContext.setProps(getContextProps())

export const Tracker = withTrackerContext(appContext)
