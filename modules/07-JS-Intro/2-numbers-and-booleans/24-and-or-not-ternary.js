console.log(true && false) // false
console.log(true && true)  // true
console.log(true || false) // true
console.log(true || true)  // true
console.log(!true)         // false

function isBetween (n, a, b) {
  return n >= a && n <= b
}

function max (a, b) {
  return a > b ? a : b
}

console.log(isBetween(4, 7, 9)) // false
console.log(isBetween(8, 7, 9)) // true

console.log(max(5, 6))          // 6

/*
** &&: true only iff both are true
** ||: false only iff both are false
** ?:
*/
