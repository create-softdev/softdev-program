const fs = require('fs')

console.log('program started')

fs.writeFile(`${__dirname}/workfiles/hello.txt`, 'hello, world', () => {
  console.log('File was written!')
})

console.log('program ended')

