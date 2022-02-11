import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as loginTracker from './login-track-events';

jest.mock('./login-track-events')

import { LoginPage } from './LoginPage';

it('should track login', () => {
  render(<LoginPage />)

  const loginButton = screen.getByRole('button', { name: 'Login' })
  userEvent.click(loginButton)

  expect(loginTracker.trackLogin).toHaveBeenCalledTimes(1)
});
