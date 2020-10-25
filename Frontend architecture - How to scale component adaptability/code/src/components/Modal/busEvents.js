import { EventBus } from '@/eventBus'

export const OPEN = '@modal/OPEN'
export const CLOSE = '@modal/CLOSE'

export function openModal({ component, props, isClosable = true }) {
  EventBus.$emit(OPEN, { component, props, isClosable })
}

export function closeModal() {
  EventBus.$emit(CLOSE)
}
