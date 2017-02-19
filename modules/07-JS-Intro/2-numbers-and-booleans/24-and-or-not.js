console.log(true && false) // false
console.log(true && true)  // true
console.log(true || false) // true
console.log(true || true)  // true
console.log(!true)         // false

function isBetween (n, a, b) {
  return n >= a && n <= b
}

console.log(isBetween(4, 7, 9)) // false
console.log(isBetween(8, 7, 9)) // true

/*
** &&: true only iff both are true
** ||: false only iff both are false
** ?:
*/
