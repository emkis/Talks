import { EventBus } from '@/eventBus'

export const OPEN = '@modal/OPEN'
export const CLOSE = '@modal/CLOSE'

export function openModal({ component, componentProps, isClosable = true }) {
  EventBus.$emit(OPEN, { component, componentProps, isClosable })
}

export function closeModal() {
  EventBus.$emit(CLOSE)
}
