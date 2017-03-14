function map (arr, func) {
  const ret = []

  for (const i in arr) {
    ret.push(func(arr[i]))
  }

  return ret
}

console.log(map([2, 5, 3], (n) => n + 1)) // [ 3, 6, 4 ]
console.log(map([2, 5, 3], (n) => n - 1)) // [ 1, 4, 2 ]
console.log(map([2, 5, 3], n => n * n))   // [ 4, 25, 9 ]

/**
 * Arrow functions
 * Parameter can be with or without ()
 */
