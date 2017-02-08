function map (arr, func) {
  const ret = []

  for (const i in arr) {
    ret.push(func(arr[i]))
  }

  return ret
}

console.log(map([2, 5, 3], function (n) { return n + 1 }))
console.log(map([2, 5, 3], function (n) { return n - 1 }))

/**
 * Anonymous functions
 */
/* eslint prefer-arrow-callback: 0 */
/* eslint brace-style: 0 */
