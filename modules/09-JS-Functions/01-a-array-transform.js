function incrementByOneMutating(arr) {
  for (const i in arr) {
    arr[i] = arr[i] + 1;
  }
}

function decrementByOnePure(arr) {
  const ret = [];

  for (const i in arr) {
    ret.push(arr[i] + 1);
  }

  return ret;
}

const arr = [2, 4, 8];

incrementByOneMutating(arr);
console.log(arr);

console.log(decrementByOnePure([2, 5, 3]));

/**
 * Mutating functions vs pure functions
 * Go over two implementations
 */
