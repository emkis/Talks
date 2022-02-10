import { trackLogin, trackRegister, trackLoginError } from './login-track-events';
import { updateTrackerContext } from './tracker-service';

export function LoginPage() {
  function handleLogin() {
    trackLogin()

    try {
      // ...login logic
      localStorage.setItem('user-id', 'jf93nd7')
      updateTrackerContext()
      // now the userId is defined in the context
    } catch {
      trackLoginError()
    }
  }

  function handleRegister() {
    // ...register logic
    trackRegister()
  }

  return (
    <main>
      <h1> Awesome login page </h1>
      <button type="button" onClick={handleLogin}> Login </button>
      <button type="button" onClick={handleRegister}> Register </button>
    </main>
  )
}
