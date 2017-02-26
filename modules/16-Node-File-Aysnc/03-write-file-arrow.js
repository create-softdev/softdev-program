const fs = require('fs')

fs.writeFile(`${__dirname}/workfiles/hello.txt`, 'hello, world', () => {
  console.log('File was written!')
})

/**
 * Same, with arrow function.
 * This is what we will mostly use.
 */
