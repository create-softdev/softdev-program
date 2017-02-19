console.log('Robin Hood'.length)                      // 10

console.log('Robin Hood'.startsWith('Rob'))           // true
console.log('foofighters.txt'.endsWith('.txt'))       // true
console.log('Zoo Keeper'.indexOf('eep'))              // 5
console.log('Zoo Keeper'.indexOf('bbb'))              // -1
console.log('Zoo Keeper'.includes('per'))             // true
console.log('Zoo Keeper'.replace('Keep', 'Sheep'))    // Zoo Sheeper
console.log('Zoo Keeper'.slice(4, 8))                 // Keep
console.log('Zoo Keeper'.split(' '))                  // [ 'Zoo', 'Keeper' ]
console.log(['Zoo', 'Keeper'].join(' '))              // Zoo Keeper
console.log('   Zookie  '.trim())                     // Zookie
console.log('Zoo' + ' ' + 'Keeper')                   // Zoo Keepr

const stringWithUnicode = 'Robin H😀😀d'

// iterate using for-of
for (const ch of stringWithUnicode) {
  console.log(ch)
}
// R
// o
// b
// i
// n
//
// H
// 😀
// 😀
// d

// iterate by turning it into an array
const arrayOfChars = Array.from(stringWithUnicode)

console.log(arrayOfChars.filter((x) => x !== 'o'))  // [ 'R', 'b', 'i', 'n', ' ', 'H', '😀', '😀', 'd' ]

// turn it back into a string
console.log(arrayOfChars.join('')) // Robin H😀😀d

/**
 * Strings are immutable!
 * And all the above methods...
 * And how to get all the characters in a Unicode reliant way
 */
/* eslint no-console: 0 */
