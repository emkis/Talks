export function asyncDelay(ms = 700) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
