console.log('Robin Hood'.length);
console.log('Robin Hood'.split(' '));
console.log(['Robin', 'Hood'].join(' '));

console.log('Robin Hood'.startsWith('Rob'));
console.log('foofighters.txt'.endsWith('.txt'));
console.log('Zoo Keeper'.indexOf('per'));
console.log('Zoo Keeper'.indexOf('bbb'));
console.log('Zoo Keeper'.includes('per'));
console.log('Zoo Keeper'.replace('Keep', 'Sheep'));
console.log('Zoo Keeper'.slice(4, 8));
console.log('Zoo Keeper'.split(' '));
console.log(['Zoo', 'Keeper'].join(' '));
console.log('   Zookie  '.trim());
console.log('Zoo' + ' ' + 'Keeper');

const stringWithUnicode = 'Robin H😀😀d';

// iterate using for-of
for (const ch of stringWithUnicode) {
  console.log(ch);
}

// iterate by turning it into an array
const arrayOfChars = Array.from(stringWithUnicode);

console.log(arrayOfChars.filter((x) => x !== 'o'));

// turn it back into a string

console.log(arrayOfChars.join(''));

/**
 * Strings are immutable!
 * And all the above methods...
 * And how to get all the characters in a Unicode reliant way
 */
/* eslint no-console: 0 */
