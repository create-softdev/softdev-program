function increment(n) {
  return n + 1;
}
function decrement(n) {
  return n - 1;
}

function map(arr, func) {
  const ret = [];

  for (const i in arr) {
    ret.push(func(arr[i]));
  }

  return ret;
}

console.log(map([2, 5, 3], increment));
console.log(map([2, 5, 3], decrement));

/**
 * Functions as values ("first-class citizens")
 * Go over two implementations
 */
