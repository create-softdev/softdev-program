const arr = ['hi']

arr.push('bye')
console.log(arr)      // ['hi', 'bye']

const last = arr.pop()
console.log(last)     // 'bye'
console.log(arr)      // ['hi']

const another = ['a', 'b', 'c', 'd', 'e']

console.log(another.slice(2, 4))   // [ 'c', 'd' ]

console.log(another.includes('c')) // true

console.log(another.concat(arr, 'h', ['i', 'j']))  // [ 'a', 'b', 'c', 'd', 'e', 'hi', 'h', 'i', 'j' ]

another[0] = 'x'
another.sort()
console.log(another)       // [ 'b', 'c', 'd', 'e', 'x' ]

/**
 * push - appends value (mutates)
 * pop - removes last element (mutates)
 * slice - sub-array (returns new array)
 * includes - search for value in array
 * open-ended range, e.g. [start, end)
 * concat - concatenates values or other arrays (returns new array)
 * sort - sorts an array (mutates)
 * More... https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype
 */
/* eslint newline-after-var: 0 */
