export const typesEnum = Object.freeze({
  ADD_FRIEND: 'ADD_FRIEND',
  UNFRIEND: 'UNFRIEND',
  BLOCK_FRIEND: 'BLOCK_FRIEND',
})

export function isTypeValid(targetType) {
  return Object.values(typesEnum).includes(targetType)
}
