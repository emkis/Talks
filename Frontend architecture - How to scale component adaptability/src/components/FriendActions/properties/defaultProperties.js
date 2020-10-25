import { isTypeValid } from './types'

const mockFunction = () => {}

export default {
  type: {
    type: String,
    required: true,
    validator(type) {
      return isTypeValid(type)
    },
  },
  handler: { type: Function, default: mockFunction },
}
