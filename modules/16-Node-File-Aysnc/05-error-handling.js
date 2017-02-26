const fs = require('fs')

fs.writeFile(`${__dirname}/does-not-exist/hello.txt`, 'hello, world', (err) => {
  if (err) {
    console.log('File was not written')
    console.error(err)

    return
  }
  console.log('file was written!')
})

/**
 * Error handling - the err parameter
 * err is falsy or truthy
 * If truthy, it is usually an Error object, which usually has a `code` property which
   says what it is.
 * If you console.log it, it will show a nice string detailing information about the error.
 * consol.error
 * The patter of if (err) {...}
 */
