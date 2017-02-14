function increment (n) {
  return n + 1
}
function decrement (n) {
  return n - 1
}

function map (arr, func) {
  const ret = []

  for (const i in arr) {
    ret.push(func(arr[i]))
  }

  return ret
}

console.log(map([2, 5, 3], increment))  // [ 3, 6, 4 ]
console.log(map([2, 5, 3], decrement))  // [ 1, 4, 2 ]

/**
 * Functions as values ("first-class citizens")
 * Go over two implementations
 */
