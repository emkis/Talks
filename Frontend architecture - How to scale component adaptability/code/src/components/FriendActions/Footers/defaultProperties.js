const mockFunction = () => {}

const defaultHandlers = () => ({
  handleActionButtonClick: mockFunction,
  handleCloseButtonClick: mockFunction,
})

const handlersValidator = (prop) => {
  const hasCloseHandler = 'handleCloseButtonClick' in prop
  const hasActionHandler = 'handleActionButtonClick' in prop

  return hasCloseHandler && hasActionHandler
}

export default {
  isLoading: { type: Boolean, default: false },
  hasError: { type: Boolean, default: false },
  handlers: {
    type: Object,
    default: defaultHandlers,
    validator: handlersValidator,
  },
}
