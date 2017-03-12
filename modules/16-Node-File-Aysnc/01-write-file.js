const fs = require('fs')

function callback () {
  console.log('File was written!')
}

fs.writeFile(`${__dirname}/more/hello.txt`, 'hello, world', callback)

/**
 * async function (writeFile)
 * callback
 * Do not explain about how the program ends immediately and yet waits for the callback.
 */
/* eslint handle-callback-err: 0 */
