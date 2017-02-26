const fs = require('fs')

console.log('program started')

fs.writeFile(`${__dirname}/workfiles/hello.txt`, 'hello, world', () => {
  console.log('File was written!')
})

console.log('program ended')
// output:
// program started
// program ended
// File was written

/**
 * The callback is called _after_ the synchronous part.
 * The program only ends when no more callbacks need to be called.
 */

