// 节流函数
export const throttle = (fn, delay) => {
  let suspend = false

  return function() {
    if (suspend) {
      return false
    }

    suspend = true

    setTimeout(() => {
      fn.call(this, arguments)
      suspend = false
    }, delay)
  }
}
