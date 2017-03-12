const fs = require('fs')

fs.writeFile(`${__dirname}/more/hello.txt`, 'hello, world', () => {
  console.log('File was written!')
})

/**
 * Same, with arrow function.
 * This is what we will mostly use.
 */
