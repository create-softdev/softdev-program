function increment (n) {
  return n + 1
}

function map (arr, func) {
  const ret = []

  for (const v of arr) {
    ret.push(func(v))
  }

  return ret
}

console.log(map([2, 5, 3], increment))  // [ 3, 6, 4 ]

/**
 * Functions as values ("first-class citizens")
 */
