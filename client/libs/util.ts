export function throttle<T extends (...args: any[]) => any>(
  func: T,
  delay: number,
  atOnce = false,
): (...args: Parameters<T>) => void {
  let currentTime: any = new Date()
  let isFirstExecution = true

  return (...args) => {
    const nowTime: any = Date.now()

    if (isFirstExecution && atOnce) {
      func(...args)
      currentTime = Date.now()
      isFirstExecution = false
      return
    }

    if (nowTime - currentTime > delay) {
      func(...args)
      currentTime = Date.now()
    }
  }
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
): (...args: Parameters<T>) => void {
  let timer: any = null
  return (...args) => {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    timer = setTimeout(() => {
      func(...args)
    }, wait)
  }
}
