const fs = require('fs')

function callback () {
  console.log('File was written!')
}

fs.writeFile(`${__dirname}/workfiles/hello.txt`, 'hello, world', callback)

/* eslint handle-callback-err: 0 */
