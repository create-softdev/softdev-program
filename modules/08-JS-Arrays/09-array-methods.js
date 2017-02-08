const arr = ['hi']

arr.push('bye')
console.log(arr)

const last = arr.pop()
console.log(last)
console.log(arr)

const another = ['a', 'b', 'c', 'd', 'e']

console.log(another.slice(2, 4))

console.log(another.concat(arr, 'h', ['i', 'j']))

another.sort()
console.log(another)

/**
 * push - appends value (mutates)
 * pop - removes last element (mutates)
 * slice - sub-array (returns new array)
 * open-ended range, e.g. [start, end)
 * concat - concatenates values or other arrays (returns new array)
 * sort - sorts an array (mutates)
 * More... https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype
 */
/* eslint newline-after-var: 0 */
