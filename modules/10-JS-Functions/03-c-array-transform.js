function increment (n) {
  return n + 1
}

function square (n) {
  return n * n
}

function decrement (n) {
  return n - 1
}

function map (arr, func) {
  const ret = []

  for (const v of arr) {
    ret.push(func(v))
  }

  return ret
}

console.log(map([2, 5, 3], increment))  // [ 3, 6, 4 ]
console.log(map([2, 5, 3], square))     // [ 4, 25, 9 ]
console.log(map([2, 5, 3], decrement))  // [ 1, 4, 2 ]

/**
 * More examples
 */
