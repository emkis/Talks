export function delay(seconds: number) {
  const oneSecond = 1000
  return new Promise((resolve) => {
    setTimeout(resolve, oneSecond * seconds)
  })
}
