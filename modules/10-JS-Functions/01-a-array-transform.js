function incrementByOneMutating (arr) {
  for (const i in arr) {
    arr[i] = arr[i] + 1
  }
}

function incrementByOnePure (arr) {
  const ret = []

  for (const i in arr) {
    ret.push(arr[i] + 1)
  }

  return ret
}

const arr = [2, 4, 8]

incrementByOneMutating(arr)
console.log(arr)                            // [ 3, 5, 9 ]

console.log(incrementByOnePure([2, 5, 3]))  // [ 3, 6, 4 ]

/**
 * Mutating functions vs pure functions
 * Go over two implementations
 */
