function map (arr, func) {
  const ret = []

  for (const i in arr) {
    ret.push(func(arr[i]))
  }

  return ret
}

console.log(map([2, 5, 3], (n) => n + 1))
console.log(map([2, 5, 3], (n) => n - 1))

/**
 * Functions as values ("first-class citizens")
 * Go over two implementations
 */
